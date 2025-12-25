import ConnectWallet from "../components/ConnectWallet";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">StackPay</h1>
      <p className="mt-2">Decentralized payroll & salary streaming on Stacks</p>
      <ConnectWallet />
    </main>
  );
}