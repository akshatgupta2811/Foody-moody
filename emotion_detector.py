import cv2
import tensorflow as tf
import numpy as np
import pathlib
import os

class EmotionDetector:
    def __init__(self, model_path='best_model.h5'):
        # Change directory to script location # By Akshat Gupta
        cascade_path = pathlib.Path(__file__).parent.absolute()
        os.chdir(cascade_path)

        # Load the emotion detection model
        self.model = tf.keras.models.load_model(model_path)

        # Define the emotions
        self.emotions = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral']

        # Load face cascade classifier # By Akshat Gupta
        self.face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascades_frontalface_default.xml')

    def predict_emotion(self, gray_face):
        roi_gray = cv2.resize(gray_face, (48, 48))
        roi = roi_gray.astype('float') / 255.0
        roi = np.expand_dims(roi, axis=0)
        roi = np.expand_dims(roi, axis=-1)
        prediction = self.model.predict(roi)[0]
        return self.emotions[prediction.argmax()] # By Akshat Gupta

    def detect_faces(self, gray_frame):
        faces = self.face_cascade.detectMultiScale(gray_frame, 1.3, 5)
        return faces
# By Akshat Gupta
