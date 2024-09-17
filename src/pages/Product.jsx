import React, { useState } from "react";
import MarkdownIt from "markdown-it";

const Product = ({
  isAuthenticated,
  loginWithRedirect,
  updateLocomotiveScroll,
}) => {
  const [image, setImage] = useState(null);
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const md = new MarkdownIt();

  const surpriseOptions = [
    "Does the image have a whale?",
    "Is the image fabulously pink?",
    "Does the image have puppies?",
    "Is the image blurry?",
    "Is the image cartoonish?",
    "Does the image have a dog?",
    "Is the background green?",
  ];

  const surprise = () => {
    const options = [...surpriseOptions];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomElement = options.splice(randomIndex, 1)[0];
    setValue(randomElement);
  };

  const analyzeImage = async () => {
    if (!image) {
      setError("Please upload an image");
      return;
    }
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("prompt", value);

      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Process the structured response
      let buffer = [];
      for (let part of result.parts) {
        buffer.push(part.text);
      }

      setResponse(md.render(buffer.join("")));
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again");
    } finally {
      setLoading(false);
      setTimeout(() => {
        updateLocomotiveScroll();
      });
    }
  };

  const clear = () => {
    setImage(null);
    setValue("");
    setResponse("");
    setError("");
    updateLocomotiveScroll();
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    e.target.value = null;
  };

  return (
    <div
      id="product"
      data-scroll-section
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
    >
      {isAuthenticated ? (
        <section className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4">
          <div className="flex justify-center items-center mb-4">
            {image && (
              <img
                src={URL.createObjectURL(image)}
                className="w-full h-auto max-h-64 rounded-md object-cover"
                alt="Uploaded"
              />
            )}
          </div>
          <p className="text-sm text-gray-600 flex items-center">
            <span>
              <label
                htmlFor="files"
                className="text-[#6A00FF] font-medium cursor-pointer hover:underline"
              >
                Upload an Image
              </label>
              <input
                onChange={uploadImage}
                type="file"
                id="files"
                accept="image/*"
                hidden
              />
            </span>
            &nbsp;to ask questions about.
          </p>

          <p className="text-sm text-gray-600">
            What do you want to know about the image?
            <button
              className="text-white bg-[#6A00FF] hover:bg-[rebeccapurple] font-semibold my-1 mt-2 py-1 px-3 rounded-md transition duration-300 disabled:opacity-50"
              onClick={surprise}
              disabled={response}
            >
              Surprise me
            </button>
          </p>

          <div className="space-y-4">
            <input
              type="text"
              value={value}
              placeholder="What is in the image..."
              onChange={(e) => setValue(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-indigo-500"
            />

            {!response && !error && !loading && (
              <button
                onClick={analyzeImage}
                className="w-full bg-[#6A00FF] hover:bg-[rebeccapurple] text-white font-semibold py-2 rounded-md transition duration-300"
              >
                Ask me
              </button>
            )}

            {loading && (
              <div className="w-full bg-gray-200 rounded-md py-2 flex items-center justify-center">
                <div className="loader"></div>
              </div>
            )}

            {(response || error) && !loading && (
              <button
                onClick={clear}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition duration-300"
              >
                Clear
              </button>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {response && (
              <div
                className="text-green-600 text-sm font-medium response"
                dangerouslySetInnerHTML={{ __html: response }}
              />
            )}
          </div>
        </section>
      ) : (
        <div>
          <h1 className="text-xl text-center text-[#6A00FF]">
            Please Login to use this feature
          </h1>
          <button
            onClick={loginWithRedirect}
            className="w-full bg-[#6A00FF] hover:bg-[rebeccapurple] text-white font-semibold py-2 rounded-md transition duration-300 mt-4"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
