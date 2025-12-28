# Pay-Vibe — Decentralized Payroll & Real-Time Salary Streaming on Stacks

**Pay-Vibe** is a decentralized payroll and salary streaming platform built on the Stacks blockchain.  
It enables companies, DAOs, and independent founders to pay contributors continuously using block-based salary accrual, with secure wallet-based authentication.

Salaries are streamed in real time, employees can withdraw earnings whenever they choose, and employers manage payroll transparently without ever holding employee funds.

---

## Wallet Connectivity

Pay-Vibe uses WalletConnect to provide seamless wallet access across both desktop and mobile environments.

### Supported Wallets
- Leather
- Xverse
- Hiro
- Any WalletConnect-compatible Stacks wallet

### WalletConnect Benefits
- Mobile-first user experience  
- Broad multi-wallet support  
- Secure, non-custodial authentication  
- Standardized wallet connection flow  

Wallet connections are implemented using the **Stacks Connect SDK**, which includes native WalletConnect support.

---

## Salary Streaming Model

Because Stacks does not support continuous time, Pay-Vibe uses **block height** as a deterministic time reference.

Salary accrual formula:


As long as a salary stream remains active and funded, employees accrue earnings every block and may withdraw at any time.

---

## Core Features

### Employer Features
- Create salary streams
- Fund and top up active streams
- Cancel salary streams
- View transparent on-chain payroll activity

### Employee Features
- Earn salary continuously
- Withdraw accrued wages on demand
- Authenticate securely via wallet
- Maintain full custody of earned funds

### Protocol Characteristics
- Fully non-custodial smart contracts
- Block-based salary calculation
- Deterministic and auditable execution
- WalletConnect-powered access control

---

## Technology Stack

- **Blockchain:** Stacks
- **Smart Contracts:** Clarity
- **Wallet Integration:** WalletConnect
- **Frontend:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Wallet SDK:** `@stacks/connect`
- **Transactions:** `@stacks/transactions`

---

## WalletConnect Integration

Wallet connections are handled through the **Stacks Connect SDK**, supporting WalletConnect-enabled Stacks wallets.

### Connection Flow
1. User clicks **Connect Wallet**
2. WalletConnect modal opens
3. User selects a supported wallet
4. Wallet session metadata is established
5. All contract interactions require explicit wallet approval

Wallet session metadata and WalletConnect events can be observed externally for analytics and monitoring.

---

## Smart Contract Design

All payroll logic is implemented in a Clarity smart contract.

### Core Functions
- `create-stream` — Create a new salary stream
- `withdraw` — Withdraw accrued salary
- `fund-stream` — Add funds to an existing stream
- `cancel-stream` — Terminate a salary stream

### Stream State
- Employer address
- Employee address
- Rate per block
- Last withdrawal block
- Remaining balance
- Stream status

All state transitions are recorded on-chain and can be indexed by external services.

---

## Project Structur


---

## Local Development

Install dependencies and start the development server:


