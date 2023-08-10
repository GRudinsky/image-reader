import { readImageText } from "../src/controllers/api";
import { Request, Response } from "express";
import processImage from "../src/utils/processImage";

jest.mock("../src/utils/processImage");

describe("API tests", () => {
  const mockRes = () => {
    const res = {} as Response;
    res.status = jest.fn(() => res);
    res.send = jest.fn(() => res);
    return res;
  };
  const mockResponse = mockRes();

  beforeEach(() => {
    (processImage as jest.Mock).mockResolvedValue("Hello World");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 OK", async () => {
    const mockRequest = {
      body: {
        imageUrl: "https://www.w3.org/TR/SVGTiny12/examples/textArea01.png",
      },
    };

    await readImageText(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith({
      imageText: "Hello World",
    });
  });

  it("should return 400 Bad Request for invalid url", async () => {
    const mockRequest: Partial<Request> = {
      body: {
        imageUrl: "invalid-url",
      },
    };

    await readImageText(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.send).toHaveBeenCalledWith({
      message: "Invalid imageUrl",
    });
  });

  it("should return 400 Bad Request for missing url", async () => {
    const mockRequest: Partial<Request> = {
      body: {},
    };

    await readImageText(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.send).toHaveBeenCalledWith({
      message: "Missing imageUrl",
    });
  });
});
