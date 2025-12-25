

# StackPay — Decentralized Payroll & Salary Streaming on Stacks

StackPay is a decentralized payroll and salary streaming application built on the Stacks blockchain.  
It enables companies, DAOs, and founders to stream salaries to contributors in real time using block-based accrual, with full support for WalletConnect-enabled Stacks wallets.

Employees can withdraw earned wages at any time, while employers manage payroll in a transparent and non-custodial way.

---

## Wallet Connectivity

StackPay integrates WalletConnect to enable seamless wallet connections across desktop and mobile environments.

Supported wallets include:
- Leather
- Xverse
- Hiro
- Any Stacks wallet compatible with WalletConnect

WalletConnect provides:
- Mobile-first access
- Multi-wallet compatibility
- Secure, non-custodial authentication
- Standardized wallet connection flow

Wallet connections are implemented using the Stacks Connect SDK with built-in WalletConnect support.

---

## How Salary Streaming Works

Stacks does not support continuous time, so StackPay uses block height as a deterministic time source.

Salary accrual is calculated as:

(current block − last withdrawal block) × rate per block

Employees can withdraw their accumulated salary at any point while the stream remains active.

---

## Features

Employer capabilities:
- Create salary streams
- Fund and top up active streams
- Cancel salary streams
- View transparent on-chain payroll activity

Employee capabilities:
- Earn salary in real time
- Withdraw salary on demand
- Authenticate via wallet connection
- No employer custody of funds

Protocol characteristics:
- Non-custodial smart contracts
- Block-based salary calculation
- Deterministic and auditable logic
- WalletConnect-powered access control

---

## Tech Stack

- Blockchain: Stacks
- Smart Contracts: Clarity
- Wallet Integration: WalletConnect
- Frontend: Next.js (App Router)
- Styling: Tailwind CSS
- Wallet SDK: @stacks/connect
- Transactions: @stacks/transactions

---

## WalletConnect Integration Details

Wallet connections are handled through the Stacks Connect SDK, which supports WalletConnect-compatible Stacks wallets.

Connection flow:
1. User initiates wallet connection from the interface
2. WalletConnect modal opens
3. User selects a supported wallet
4. Session metadata is established
5. All contract calls require explicit wallet approval

This setup exposes wallet session metadata and emits WalletConnect events that can be externally observed.

---

## Smart Contract Overview

The payroll logic is implemented in a Clarity smart contract.

Core functions include:
- create-stream: initialize a new salary stream
- withdraw: withdraw earned salary
- fund-stream: add funds to an existing stream
- cancel-stream: terminate a salary stream

Each stream tracks:
- Employer address
- Employee address
- Rate per block
- Last withdrawal block
- Remaining balance
- Stream status

All state changes are recorded on-chain and can be indexed externally.

---

## Project Structure

stackpay/
- app/          Next.js frontend
- components/   UI components
- lib/          Network and contract configuration
- contracts/    Clarity smart contracts
- public/       Static assets
- README.md

---

## Installation and Local Development

Install dependencies and start the development server:

npm install  
npm run dev

The application will be available at http://localhost:3000

---

## Deployment

- Frontend can be deployed on Vercel or Netlify
- Smart contracts are deployed using Clarinet or the Stacks CLI
- WalletConnect works automatically in development and production environments

---

## Observability and Indexing

StackPay is designed to be easily observable through:
- Wallet connection metadata
- WalletConnect session events
- On-chain contract calls
- Stream creation and withdrawal transactions

This enables reliable detection of wallet integrations and payroll activity.

---

## Security

- No private keys are stored
- Funds are held entirely in smart contracts
- Explicit wallet approvals are required for all actions
- Deterministic Clarity execution ensures predictable behavior

---

## Future Enhancements

- SIP-010 token salary streams
- DAO payroll modules
- Vesting cliffs and schedules
- Payroll analytics dashboard
- Notification hooks for withdrawals

---

## License

MIT License
