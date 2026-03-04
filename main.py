import argparse
import sys

def run_cam():
    import cam
    # cam.py runs its main loop on import # By Akshat Gupta

def run_emotion_detection():
    import Emotion_detection
    # Emotion_detection.py runs its main loop on import

def main():
    parser = argparse.ArgumentParser(description="Emotion Detection Project")
    parser.add_argument(
        '--mode',
        choices=['cam', 'emotion_detection'],
        default='cam',
        help="Choose which emotion detection script to run"
    )
    args = parser.parse_args()

    if args.mode == 'cam':
        run_cam()
    elif args.mode == 'emotion_detection':
        run_emotion_detection()
    else:
        print("Invalid mode selected.")
        sys.exit(1)

if __name__ == "__main__":
    main()
    # By Akshat Gupta
