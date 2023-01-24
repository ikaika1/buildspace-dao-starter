import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xf629eDEe173a360c90c0b7538CEaCB43bF090587", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "dog food",
        description: "This NFT will give you access to DogDAO!",
        image: readFileSync("scripts/assets/Screenshot_6.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();