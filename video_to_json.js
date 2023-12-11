// const ffmpeg = require('fluent-ffmpeg');
// ffmpeg.setFfmpegPath('D:/New company - nadia - seif/video-to-json/node_modules/fluent-ffmpeg/lib/ffprobe.js')
// const fs = require('fs');

// function videoToJSON(videoPath, outputPath) {
//   ffmpeg.ffprobe(videoPath, (err, metadata) => {
//     if (err) {
//       console.error('Error:', err);
//       return;
//     }

//     const videoInfo = {
//       video_path: videoPath,
//       duration: metadata.format.duration,
//       resolution: {
//         width: metadata.streams[0].width,
//         height: metadata.streams[0].height,
//       },
//       fps: metadata.streams[0].r_frame_rate,
//       // Add more attributes as needed
//     };

//     const jsonData = JSON.stringify(videoInfo, null, 2);

//     fs.writeFile(outputPath, jsonData, 'utf8', (writeErr) => {
//       if (writeErr) {
//         console.error('Error writing JSON file:', writeErr);
//       } else {
//         console.log('Video information saved to', outputPath);
//       }
//     });
//   });
// }

// // Check if a video path is provided as a command-line argument
// const videoPath = process.argv[2];

// if (!videoPath) {
//   console.error(
//     'Please provide the path to the video file as a command-line argument.'
//   );
//   process.exit(1);
// }

// const outputPath = 'video_info.json';

// videoToJSON(videoPath, outputPath);


// const { exec } = require('child_process');
// const fs = require('fs');

// function videoToJSON(videoPath, outputPath) {
//     const command = `ffprobe -v error -select_streams v:0 -show_entries stream=duration,width,height -of json "${videoPath}"`;

//     exec(command, (err, stdout, stderr) => {
//         if (err) {
//             console.error('Error:', err.message);
//             return;
//         }

//         const videoInfo = JSON.parse(stdout);

//         // Add the video path to the info object
//         videoInfo.video_path = videoPath;

//         const jsonData = JSON.stringify(videoInfo, null, 2);

//         fs.writeFile(outputPath, jsonData, 'utf8', (writeErr) => {
//             if (writeErr) {
//                 console.error('Error writing JSON file:', writeErr);
//             } else {
//                 console.log('Video information saved to', outputPath);
//             }
//         });
//     });
// }

// // Check if a video path is provided as a command-line argument
// const videoPath = process.argv[2];

// if (!videoPath) {
//     console.error('Please provide the path to the video file as a command-line argument.');
//     process.exit(1);
// }

// const outputPath = 'video_info.json';

// videoToJSON(videoPath, outputPath);

// const ffmpeg = require('ffmpeg-static');
// const { exec } = require('child_process');
// const fs = require('fs');

// function videoToJSON(videoPath, outputPath) {
//     const command = `${ffmpeg} -v error -select_streams v:0 -show_entries stream=duration,width,height -of json "${videoPath}"`;

//     exec(command, (err, stdout, stderr) => {
//         if (err) {
//             console.error('Error:', err.message);
//             return;
//         }

//         const videoInfo = JSON.parse(stdout);

//         // Add the video path to the info object
//         videoInfo.video_path = videoPath;

//         const jsonData = JSON.stringify(videoInfo, null, 2);

//         fs.writeFile(outputPath, jsonData, 'utf8', (writeErr) => {
//             if (writeErr) {
//                 console.error('Error writing JSON file:', writeErr);
//             } else {
//                 console.log('Video information saved to', outputPath);
//             }
//         });
//     });
// }

// // Check if a video path is provided as a command-line argument
// const videoPath = process.argv[2];

// if (!videoPath) {
//     console.error('Please provide the path to the video file as a command-line argument.');
//     process.exit(1);
// }

// const outputPath = 'video_info.json';

// videoToJSON(videoPath, outputPath);

const { exec } = require('child_process');
const fs = require('fs');

function videoToJSON(videoPath, outputPath) {
    const ffprobePath = require('ffprobe-static').path;
    const command = `${ffprobePath} -v error -select_streams v:0 -show_entries stream=duration,width,height -of json "${videoPath}"`;

    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error('Error:', err.message);
            return;
        }

        try {
            const videoInfo = JSON.parse(stdout);

            // Add the video path to the info object
            videoInfo.video_path = videoPath;

            const jsonData = JSON.stringify(videoInfo, null, 2);

            fs.writeFile(outputPath, jsonData, 'utf8', (writeErr) => {
                if (writeErr) {
                    console.error('Error writing JSON file:', writeErr);
                } else {
                    console.log('Video information saved to', outputPath);
                }
            });
        } catch (jsonParseError) {
            console.error('Error parsing ffprobe output:', jsonParseError.message);
        }
    });
}

// Check if a video path is provided as a command-line argument
const videoPath = process.argv[2];

if (!videoPath) {
    console.error('Please provide the path to the video file as a command-line argument.');
    process.exit(1);
}

const outputPath = 'video_info.json';

videoToJSON(videoPath, outputPath);