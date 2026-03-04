import time
from collections import Counter
import cv2
from emotion_detector import EmotionDetector
import pathlib
import os

# Change directory to script location # By Akshat Gupta
cascade_path = pathlib.Path(__file__).parent.absolute()
os.chdir(cascade_path)

# Get full file path for emotions.txt
emotion_file_path = os.path.join(cascade_path, "emotions.txt")
print(f"Emotion file will be saved at: {emotion_file_path}")

# Initialize emotion detector # By Akshat Gupta
detector = EmotionDetector()

# Define the webcam
cap = cv2.VideoCapture(0)

# Run for a fixed duration
time_frame = 5  # Seconds to capture emotions
start_time = time.time()
detected_emotions = []

while time.time() - start_time < time_frame:
    ret, frame = cap.read()
    if not ret:
        break  # Stop if webcam feed is not available # By Akshat Gupta

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces
    faces = detector.detect_faces(gray)

    for (x, y, w, h) in faces:
        roi_gray = gray[y:y+h, x:x+w]

        # Predict emotion
        predicted_emotion = detector.predict_emotion(roi_gray)

        # Store detected emotion in list
        detected_emotions.append(predicted_emotion)

        # Draw bounding box and display the emotion # By Akshat Gupta
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
        cv2.putText(frame, predicted_emotion, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

    # Display the resulting video
    cv2.imshow('Emotion Detection', frame)

    # Press 'q' to exit early
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Get the most frequent detected emotion
if detected_emotions:
    most_common_emotion = Counter(detected_emotions).most_common(1)[0][0]

    # Save to file
    with open(emotion_file_path, "w") as f:  # "w" ensures it writes only once, no duplicates # By Akshat Gupta
        f.write(most_common_emotion + "\n")

    print(f"Stored emotion: {most_common_emotion}")

# Release webcam and close window
cap.release()
cv2.destroyAllWindows()
 # By Akshat Gupta
