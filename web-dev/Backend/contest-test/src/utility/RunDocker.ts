import {spawn} from "child_process"

function runDocker(
  input: string,
  tempDir: string,
  timeLimit: number,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const dockerProcess = spawn("docker", [
      "run",
      "--rm",
      "--memory=128m",
      "--cpus=0.5",
      "--network=none",
      "-v",
      `${tempDir}:/app`,
      "code-runner",
    ]);

    let output = "";
    let errorOutput = "";

    dockerProcess.stdout.on("data", (data) => {
      output += data.toString();
    });

    dockerProcess.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    dockerProcess.on("error", (err) => {
      reject(err);
    });

    dockerProcess.on("close", (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error(errorOutput || "Runtime Error"));
      }
    });

    // 🔹 Send input
    dockerProcess.stdin.write(input);
    dockerProcess.stdin.end();

    // 🔹 Timeout handling
    setTimeout(() => {
      dockerProcess.kill();
      reject(new Error("TLE"));
    }, timeLimit);
  });
}

export {runDocker}