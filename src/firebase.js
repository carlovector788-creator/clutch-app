import {
  doc, getDoc, setDoc, updateDoc, onSnapshot, collection, arrayUnion, deleteDoc,
} from "firebase/firestore";
async function submitCode() {
  const clean = code.trim().toUpperCase();
  if (!clean) return;
  setDepositBusy(true);
  setDepositMsg(null);
  try {
    const codeSnap = await getDoc(doc(db, "paymentCodes", clean));
    if (!codeSnap.exists()) {
      setDepositMsg({ text: "Invalid payment ID. Double-check and try again." });
      setDepositBusy(false);
      return;
    }
    const amount = codeSnap.data().coins;
    const newCoins = coins + amount;
    const entry = { amount, code: clean, date: new Date().toISOString() };
    const newHistory = [entry, ...depositHistory];
    await patchAccount(session.phone, { coins: newCoins, depositHistory: newHistory });
    await deleteDoc(doc(db, "paymentCodes", clean)); // one-time use
    setCoins(newCoins);
    setDepositHistory(newHistory);
    setCode("");
    setSuccessPopup(amount);
  } catch (e) {
    console.error("Deposit failed:", e);
    setDepositMsg({ text: "Couldn't process the deposit — check your connection and try again." });
  }
  setDepositBusy(false);
}
