/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Initialize Admin SDK for database access
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

// Health Stories Beta Signup Function
export const registerBetaSignup = onRequest(async (req, res): Promise<void> => {
  // --- 1. CORS Setup (Essential for website form submission) ---
  // Production domain restriction for security
  res.set("Access-Control-Allow-Origin", "https://www.mosaiclifetech.com");
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).send("");
    return;
  }
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const {name, email, organization, role, message} = req.body;

  // --- 2. Server-Side Validation ---
  if (!email || !name || !role) {
    res.status(400).send("Missing required fields: name, email, or role.");
    return;
  }

  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).send("Invalid email format.");
    return;
  }

  try {
    // --- 3. Database Write ---
    const docRef = await db.collection("websiteBetaSignups").add({
      name: name,
      email: email,
      organization: organization || "",
      role: role,
      message: message || "",
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    logger.info(`New beta signup recorded for: ${email}`, {
      documentId: docRef.id,
      email: email,
      role: role,
    });

    res.status(200).json({
      status: "success",
      message: "Signup recorded.",
    });
  } catch (error) {
    logger.error("Firestore write error:", error);
    res.status(500).send("Internal Server Error while saving data.");
  }
});

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
