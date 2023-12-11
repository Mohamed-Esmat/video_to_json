# Video Information to JSON Converter

This Node.js script extracts video information from a file and saves it in a JSON format. It utilizes the `ffprobe-static` package to run `ffprobe` and obtain details such as duration, width, and height.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohamed-Esmat/video_to_json.git
   ```

2. Install dependencies:

   ```bash
   cd video_to_json
   npm install
   ```

   This will install the necessary packages, including `ffprobe-static`.

## Usage

Run the script by providing the path to the video file as a command-line argument:

```bash
node video_to_json.js path/to/your/video.mp4
```

The script will generate a JSON file (`video_info.json`) containing information about the video.

## Example JSON Output

```json
{
  "video_path": "path/to/your/video.mp4",
  "duration": 10.25,
  "width": 1920,
  "height": 1080
  // Add more attributes as needed
}
```

## Code Explanation

The script uses the `ffprobe-static` package to get the path to the `ffprobe` binary. It then constructs and executes a command using `exec` from the `child_process` module to run `ffprobe` on the provided video file.

- `ffprobePath`: Obtains the path to the `ffprobe` binary.
- `command`: Constructs the command to run `ffprobe` with the necessary options.
- `exec`: Executes the command and captures the output.

The obtained video information is then parsed, and a JSON file is created with additional details, including the video file path.

## Dependencies

- [ffprobe-static](https://www.npmjs.com/package/ffprobe-static): A Node.js wrapper for `ffprobe`, part of the FFmpeg project.

## Contributing

Contributions are welcome! If you have any improvements or feature suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.