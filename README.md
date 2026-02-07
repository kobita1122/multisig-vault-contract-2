# Multi-Signature Vault Contract

This repository features a robust Multi-Signature (Multi-Sig) wallet implementation. It is designed for DAOs, teams, or individuals who require M-of-N authorization before any funds can be moved, significantly reducing the risk of a single point of failure.

## Features
* **M-of-N Authorization**: Set a custom threshold of required signatures (e.g., 2-of-3).
* **Transaction Queue**: Proposals are stored on-chain until the required signatures are met.
* **Revocation Logic**: Owners can revoke their confirmation before a transaction is executed.
* **Secure Withdrawals**: Prevents unauthorized access through strict access control modifiers.

## How to Use
1. **Initialize**: Deploy the contract with an array of owner addresses and the required number of confirmations.
2. **Submit**: Use `submitTransaction` to propose a destination and value.
3. **Confirm**: Other owners call `confirmTransaction`.
4. **Execute**: Once the threshold is met, anyone can call `executeTransaction` to trigger the transfer.
