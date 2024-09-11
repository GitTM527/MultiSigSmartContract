import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MultiSigModule = buildModule("MultiSigModule", (m) => {

  const multisig = m.contract("MultiSig", {});

  return { multisig };
});

export default MultiSigModule;
