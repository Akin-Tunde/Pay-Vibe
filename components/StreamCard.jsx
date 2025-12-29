"use client";

import { useState } from "react";
import { openContractCall } from "@stacks/connect";
import { uintCV } from "@stacks/transactions";
import { contractAddress, contractName } from "../lib/contract";
import { useToast } from "./Toast";

export default function StreamCard({ stream }) {
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const addToast = useToast();

  const handleWithdraw = async () => {
    setIsWithdrawing(true);
    try {
      await openContractCall({
        contractAddress,
        contractName,
        functionName: "withdraw",
        functionArgs: [uintCV(stream.id)],
      });
      addToast({ message: "Withdrawal successful!", type: "success" });
    } catch (err) {
      console.error(err);
      addToast({ message: "Withdrawal failed", type: "error" });
    }
    setIsWithdrawing(false);
  };

  return (
    <div className="bg-slate-800 p-4 rounded shadow mb-4">
      <h3 className="text-lg font-bold">Stream ID: {stream.id}</h3>
      <p>Employer: {stream.employer}</p>
      <p>Employee: {stream.employee}</p>
      <p>Rate per Block: {stream.ratePerBlock}</p>
      <p>Balance: {stream.balance}</p>
      <p>Status: {stream.active ? "Active" : "Inactive"}</p>
      <button
        onClick={handleWithdraw}
        disabled={isWithdrawing || !stream.active || stream.balance === 0}
        className={`mt-2 px-4 py-2 rounded ${
          isWithdrawing
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700"
        } text-white`}
      >
        {isWithdrawing ? "Withdrawing..." : "Withdraw"}
      </button>
    </div>
  );
}

StreamCard.propTypes = {
  stream: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    employer: PropTypes.string,
    employee: PropTypes.string,
    ratePerBlock: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    balance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    active: PropTypes.bool,
  }).isRequired,
};