import { spawn } from "child_process";
import path from "path";
function runDocker(tempDir, timeLimit) {
    const absolutePath = path.resolve(tempDir);
    return new Promise((resolve, reject) => {
        const docker = spawn("docker", [
            "run",
            "--rm",
            "--memory=128m",
            "--cpus=0.5",
            "--network=none",
            "-v",
            `${absolutePath}:/app`,
            "code-runer",
        ]);
        let stdout = "";
        let stderr = "";
        const timeout = setTimeout(() => {
            docker.kill("SIGKILL");
            reject(new Error("TLE"));
        }, timeLimit);
        docker.stdout.on("data", (data) => {
            stdout += data.toString();
        });
        docker.stderr.on("data", (data) => {
            stderr += data.toString();
        });
        docker.on("close", (code) => {
            clearTimeout(timeout);
            if (code === 0) {
                resolve(stdout);
            }
            else {
                reject(new Error(stderr || "Runtime Error"));
            }
        });
        docker.on("error", (err) => {
            clearTimeout(timeout);
            reject(err);
        });
    });
}
export { runDocker };
//# sourceMappingURL=RunDocker.js.map