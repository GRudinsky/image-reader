import { createWorker } from "tesseract.js";

type ProcessImageType = (
  imageUrl: string,
  language?: string
) => Promise<string | undefined>;

const processImage: ProcessImageType = async (imageUrl, language) => {
  language = language || "eng";
  const worker = await createWorker({
    logger: (m) => console.log(m),
  });
  try {
    await worker.loadLanguage(language);
    await worker.initialize(language);
    const {
      data: { text },
    } = await worker.recognize(imageUrl);
    return Promise.resolve(text);
  } catch (error: Error | any) {
    throw new Error(error);
  } finally {
    await worker.terminate();
  }
};

export default processImage;
