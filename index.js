import { Queue } from "bullmq";

export const redisOptions = { host: "localhost", port: 6379 };

const myQueue = new Queue("myQueue", { connection: redisOptions });

async function addJob(job) {
  const options = { repeat: { every: 5000 } };
  await myQueue.add(job.name, job, options);
}

export const welcomeMessage = () => {
  console.log("Sending a welcome message every few seconds");
};

await addJob({ name: "welcomeMessage" });
