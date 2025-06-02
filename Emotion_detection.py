import cv2
from emotion_detector import EmotionDetector
import pathlib
import os

# Change directory to script location
cascade_path = pathlib.Path(__file__).parent.absolute()
print(f"cascade_path: {cascade_path}")
os.chdir(cascade_path)

# Initialize emotion detector
detector = EmotionDetector()

# Sample restaurant food data separated into veg and non-veg
restaurants = {
    "Restaurant A": {
        "veg": ["Paneer Butter Masala", "Dal Tadka", "Veg Biryani"],
        "non_veg": ["Chicken Curry", "Mutton Rogan Josh", "Fish Fry"]
    },
    "Restaurant B": {
        "veg": ["Chole Bhature", "Aloo Gobi", "Veg Pulao"],
        "non_veg": ["Butter Chicken", "Egg Curry", "Prawn Masala"]
    },
    "Restaurant C": {
        "veg": ["Mixed Vegetable Curry", "Palak Paneer", "Jeera Rice"],
        "non_veg": ["Chicken Tikka", "Lamb Kebab", "Fish Curry"]
    }
}

# Combine all veg and non-veg food items into separate lists
all_veg_food = []
all_non_veg_food = []
for foods in restaurants.values():
    all_veg_food.extend(foods["veg"])
    all_non_veg_food.extend(foods["non_veg"])

# Define the webcam
cap = cv2.VideoCapture(0)

while True:
    # Capture the video
    ret, frame = cap.read()
    if not ret:
        break

    # Convert the video to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces
    faces = detector.detect_faces(gray)

    # For each face detected, predict the emotion
    for (x, y, w, h) in faces:
        roi_gray = gray[y:y+h, x:x+w]

        # Predict emotion
        label = detector.predict_emotion(roi_gray)

        # Draw a rectangle around the face and display the emotion
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
        cv2.putText(frame, label, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

        # Prepare food preference text
        veg_food = []
        non_veg_food = []

        # Use combined veg and non-veg food lists
        veg_food.append("Veg Food: " + ", ".join(all_veg_food))
        non_veg_food.append("Non-Veg Food: " + ", ".join(all_non_veg_food))

        # Display food preferences on the frame
        y0 = y + h + 20
        for i, text in enumerate(veg_food):
            cv2.putText(frame, text, (x, y0 + i*20), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 1)
        for i, text in enumerate(non_veg_food):
            cv2.putText(frame, text, (x, y0 + (len(veg_food) + i)*20), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 1)

    # Display the resulting video
    cv2.imshow('Emotion Detection with Food Preferences', frame)

    # Quit the program when 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam and close the window
cap.release()
cv2.destroyAllWindows()
