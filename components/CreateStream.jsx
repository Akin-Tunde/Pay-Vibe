"use client";

import { useState } from "react";
import { openContractCall } from "@stacks/connect";
import { uintCV, standardPrincipalCV } from "@stacks/transactions";
import { contractAddress, contractName } from "../lib/contract";
import { useToast } from "./Toast";

export default function CreateStream() {
  const [employee, setEmployee] = useState("");
  const [rate, setRate] = useState("");
  const [fund, setFund] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const addToast = useToast();

  const validate = () => {
    const e = {};
    if (!employee) e.employee = "Employee address is required";
    if (!rate || Number(rate) <= 0) e.rate = "Rate per block must be a positive number";
    if (!fund || Number(fund) <= 0) e.fund = "Fund amount must be a positive number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  async function create(e) {
    e?.preventDefault?.();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await openContractCall({
        contractAddress,
        contractName,
        functionName: "create-stream",
        functionArgs: [
          standardPrincipalCV(employee),
          uintCV(Number(rate)),
          uintCV(Number(fund)),
        ],
      });
      addToast({ message: "Stream created successfully.", type: "success" });
      setEmployee("");
      setRate("");
      setFund("");
    } catch (err) {
      console.error("Create stream error", err);
      addToast({ message: "Failed to create stream. See console for details.", type: "error" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={create} className="mt-4 space-y-2 max-w-md">
      <div>
        <label className="block text-sm font-medium">Employee STX Address</label>
        <input
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="SP..."
        />
        {errors.employee && <p className="text-red-500 text-sm mt-1">{errors.employee}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Rate per Block</label>
        <input
          type="number"
          min="1"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="e.g., 10"
        />
        {errors.rate && <p className="text-red-500 text-sm mt-1">{errors.rate}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Initial Fund (uSTX)</label>
        <input
          type="number"
          min="1"
          value={fund}
          onChange={(e) => setFund(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="e.g., 1000000"
        />
        {errors.fund && <p className="text-red-500 text-sm mt-1">{errors.fund}</p>}
      </div>

      <div>
        <button
          disabled={submitting}
          className={`mt-2 px-4 py-2 rounded bg-green-600 text-white ${submitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
        >
          {submitting ? 'Creating...' : 'Create Stream'}
        </button>
      </div>


    </form>
  );
}