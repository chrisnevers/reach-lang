// Automatically generated with Reach 0.1.0

// import * as stdlib from '@reach-sh/stdlib';

export async function A(stdlib, ctc, interact, v1, v2) {
  const txn0 = { balance: 0, value: 0 };
  const v5 = v1;
  const v6 = v2;
  const v7 = stdlib.isType('bool', await interact.params());
  const v8 = stdlib.add(v5, v6);
  const txn1 = await ctc.sendrecv('A', 1, 2, [v5, v6], v8, false, async (txn_out, txn1) => {
    const v9 = txn1.value;
    const v10 = stdlib.add(v5, v6);
    const v11 = stdlib.eq(v9, v10);
    stdlib.assert(v11);
    return true; });
  const v0 = txn1.from;
  const v9 = txn1.value;
  const v10 = stdlib.add(v5, v6);
  const v11 = stdlib.eq(v9, v10);
  stdlib.assert(v11);
  const txn2 = await ctc.recv('A', 2, 0, 10);
  if (txn2.didTimeout) {
    const txn3 = await ctc.sendrecv('A', 9, 0, [v0, v5, v6], 0, false, async (txn_out, txn3) => {
      const v139 = txn3.value;
      const v140 = stdlib.eq(v139, 0);
      stdlib.assert(v140);
      const v141 = txn3.balance;
      txn_out.transfer(v0, v141);
      return true; });
    const v139 = txn3.value;
    const v140 = stdlib.eq(v139, 0);
    stdlib.assert(v140);
    stdlib.assert(true);
    return ['Bob quits']; }
  else {
    const [] = txn2.data;
    const v3 = txn2.from;
    const v13 = txn2.value;
    const v14 = stdlib.eq(v13, v5);
    stdlib.assert(v14);
    const v15 = stdlib.isType('bytes', await interact.getHand());
    const v16 = stdlib.bytes_eq(v15, 'ROCK');
    const v17 = stdlib.bytes_eq(v15, 'PAPER');
    const v18 = stdlib.bytes_eq(v15, 'SCISSORS');
    const v19 = v16 ? true : v17;
    const v20 = v19 ? true : v18;
    stdlib.assert(v20);
    const v21 = v17 ? 1 : 2;
    const v22 = v16 ? 0 : v21;
    const v26 = stdlib.random_uint256();
    const v27 = stdlib.keccak256(v26, v22);
    const v28 = v27;
    const v29 = stdlib.isType('bool', await interact.commits());
    const txn3 = await ctc.sendrecv('A', 3, 1, [v0, v3, v5, v6, v28], 0, 10, async (txn_out, txn3) => {
      const v30 = txn3.value;
      const v31 = stdlib.eq(v30, 0);
      stdlib.assert(v31);
      return true; });
    if (txn3.didTimeout) {
      const txn4 = await ctc.recv('A', 8, 0, false);
      const [] = txn4.data;
      const v136 = txn4.value;
      const v137 = stdlib.eq(v136, 0);
      stdlib.assert(v137);
      stdlib.assert(true);
      return ['Alice quits']; }
    else {
      const v30 = txn3.value;
      const v31 = stdlib.eq(v30, 0);
      stdlib.assert(v31);
      const txn4 = await ctc.recv('A', 4, 1, 10);
      if (txn4.didTimeout) {
        const txn5 = await ctc.sendrecv('A', 7, 0, [v0, v3, v5, v6, v28], 0, false, async (txn_out, txn5) => {
          const v133 = txn5.value;
          const v134 = stdlib.eq(v133, 0);
          stdlib.assert(v134);
          const v135 = txn5.balance;
          txn_out.transfer(v0, v135);
          return true; });
        const v133 = txn5.value;
        const v134 = stdlib.eq(v133, 0);
        stdlib.assert(v134);
        stdlib.assert(true);
        return ['Bob quits']; }
      else {
        const [v43] = txn4.data;
        const v45 = txn4.value;
        const v46 = stdlib.eq(v45, 0);
        stdlib.assert(v46);
        const v47 = stdlib.le(0, v43);
        const v48 = stdlib.lt(v43, 3);
        const v49 = v47 ? v48 : false;
        stdlib.assert(v49);
        const v50 = v26;
        const v51 = v22;
        const v52 = stdlib.le(0, v43);
        const v53 = stdlib.lt(v43, 3);
        const v54 = v52 ? v53 : false;
        stdlib.assert(v54);
        const v55 = stdlib.eq(v43, 0);
        const v56 = stdlib.eq(v43, 1);
        const v57 = v56 ? 'PAPER' : 'SCISSORS';
        const v58 = v55 ? 'ROCK' : v57;
        const v59 = stdlib.isType('bool', await interact.reveals(v58));
        const txn5 = await ctc.sendrecv('A', 5, 2, [v0, v3, v5, v6, v28, v43, v50, v51], 0, 10, async (txn_out, txn5) => {
          const v60 = txn5.value;
          const v61 = stdlib.eq(v60, 0);
          stdlib.assert(v61);
          const v62 = stdlib.keccak256(v50, v51);
          const v63 = stdlib.eq(v28, v62);
          stdlib.assert(v63);
          const v64 = stdlib.le(0, v51);
          const v65 = stdlib.lt(v51, 3);
          const v66 = v64 ? v65 : false;
          stdlib.assert(v66);
          const v67 = stdlib.le(0, v51);
          const v68 = stdlib.lt(v51, 3);
          const v69 = v67 ? v68 : false;
          const v70 = stdlib.le(0, v43);
          const v71 = stdlib.lt(v43, 3);
          const v72 = v70 ? v71 : false;
          const v73 = v69 ? v72 : false;
          const v74 = stdlib.sub(4, v43);
          const v75 = stdlib.add(v51, v74);
          const v76 = stdlib.mod(v75, 3);
          const v77 = v72 ? 0 : 1;
          const v78 = v69 ? 2 : v77;
          const v79 = v73 ? v76 : v78;
          const v109 = stdlib.eq(v79, 2);
          const v110 = stdlib.mul(2, v5);
          const v111 = stdlib.eq(v79, 0);
          const v112 = stdlib.mul(2, v5);
          const v113 = v111 ? 0 : v5;
          const v114 = v111 ? v112 : v5;
          const v115 = v109 ? v110 : v113;
          const v116 = v109 ? 0 : v114;
          const v117 = stdlib.add(v6, v115);
          txn_out.transfer(v0, v117);
          txn_out.transfer(v3, v116);
          return true; });
        if (txn5.didTimeout) {
          const txn6 = await ctc.recv('A', 6, 0, false);
          const [] = txn6.data;
          const v130 = txn6.value;
          const v131 = stdlib.eq(v130, 0);
          stdlib.assert(v131);
          stdlib.assert(true);
          return ['Alice quits']; }
        else {
          const v60 = txn5.value;
          const v61 = stdlib.eq(v60, 0);
          stdlib.assert(v61);
          const v62 = stdlib.keccak256(v50, v51);
          const v63 = stdlib.eq(v28, v62);
          stdlib.assert(v63);
          const v64 = stdlib.le(0, v51);
          const v65 = stdlib.lt(v51, 3);
          const v66 = v64 ? v65 : false;
          stdlib.assert(v66);
          const v67 = stdlib.le(0, v51);
          const v68 = stdlib.lt(v51, 3);
          const v69 = v67 ? v68 : false;
          const v70 = stdlib.le(0, v43);
          const v71 = stdlib.lt(v43, 3);
          const v72 = v70 ? v71 : false;
          const v73 = v69 ? v72 : false;
          const v74 = stdlib.sub(4, v43);
          const v75 = stdlib.add(v51, v74);
          const v76 = stdlib.mod(v75, 3);
          const v77 = v72 ? 0 : 1;
          const v78 = v69 ? 2 : v77;
          const v79 = v73 ? v76 : v78;
          const v118 = stdlib.isType('bool', await interact.outcome());
          const v119 = stdlib.le(0, v79);
          const v120 = stdlib.lt(v79, 5);
          const v121 = v119 ? v120 : false;
          stdlib.assert(v121);
          const v122 = stdlib.eq(v79, 0);
          const v123 = stdlib.eq(v79, 1);
          const v124 = stdlib.eq(v79, 2);
          const v125 = stdlib.eq(v79, 3);
          const v126 = v125 ? 'Alice quits' : 'Bob quits';
          const v127 = v124 ? 'Alice wins' : v126;
          const v128 = v123 ? 'Draw' : v127;
          const v129 = v122 ? 'Bob wins' : v128;
          return [v129]; } } } } }

export async function B(stdlib, ctc, interact) {
  const txn0 = { balance: 0, value: 0 };
  const txn1 = await ctc.recv('B', 1, 2, false);
  const [v5, v6] = txn1.data;
  const v0 = txn1.from;
  const v9 = txn1.value;
  const v10 = stdlib.add(v5, v6);
  const v11 = stdlib.eq(v9, v10);
  stdlib.assert(v11);
  const v12 = stdlib.isType('bool', await interact.accepts(v5, v6));
  const txn2 = await ctc.sendrecv('B', 2, 0, [v0, v5, v6], v5, 10, async (txn_out, txn2) => {
    const v13 = txn2.value;
    const v14 = stdlib.eq(v13, v5);
    stdlib.assert(v14);
    return true; });
  if (txn2.didTimeout) {
    const txn3 = await ctc.recv('B', 9, 0, false);
    const [] = txn3.data;
    const v139 = txn3.value;
    const v140 = stdlib.eq(v139, 0);
    stdlib.assert(v140);
    stdlib.assert(true);
    return ['Bob quits']; }
  else {
    const v3 = txn2.from;
    const v13 = txn2.value;
    const v14 = stdlib.eq(v13, v5);
    stdlib.assert(v14);
    const txn3 = await ctc.recv('B', 3, 1, 10);
    if (txn3.didTimeout) {
      const txn4 = await ctc.sendrecv('B', 8, 0, [v0, v3, v5, v6], 0, false, async (txn_out, txn4) => {
        const v136 = txn4.value;
        const v137 = stdlib.eq(v136, 0);
        stdlib.assert(v137);
        const v138 = txn4.balance;
        txn_out.transfer(v3, v138);
        return true; });
      const v136 = txn4.value;
      const v137 = stdlib.eq(v136, 0);
      stdlib.assert(v137);
      stdlib.assert(true);
      return ['Alice quits']; }
    else {
      const [v28] = txn3.data;
      const v30 = txn3.value;
      const v31 = stdlib.eq(v30, 0);
      stdlib.assert(v31);
      const v32 = stdlib.isType('bytes', await interact.getHand());
      const v33 = stdlib.bytes_eq(v32, 'ROCK');
      const v34 = stdlib.bytes_eq(v32, 'PAPER');
      const v35 = stdlib.bytes_eq(v32, 'SCISSORS');
      const v36 = v33 ? true : v34;
      const v37 = v36 ? true : v35;
      stdlib.assert(v37);
      const v38 = v34 ? 1 : 2;
      const v39 = v33 ? 0 : v38;
      const v43 = v39;
      const v44 = stdlib.isType('bool', await interact.shows());
      const txn4 = await ctc.sendrecv('B', 4, 1, [v0, v3, v5, v6, v28, v43], 0, 10, async (txn_out, txn4) => {
        const v45 = txn4.value;
        const v46 = stdlib.eq(v45, 0);
        stdlib.assert(v46);
        const v47 = stdlib.le(0, v43);
        const v48 = stdlib.lt(v43, 3);
        const v49 = v47 ? v48 : false;
        stdlib.assert(v49);
        return true; });
      if (txn4.didTimeout) {
        const txn5 = await ctc.recv('B', 7, 0, false);
        const [] = txn5.data;
        const v133 = txn5.value;
        const v134 = stdlib.eq(v133, 0);
        stdlib.assert(v134);
        stdlib.assert(true);
        return ['Bob quits']; }
      else {
        const v45 = txn4.value;
        const v46 = stdlib.eq(v45, 0);
        stdlib.assert(v46);
        const v47 = stdlib.le(0, v43);
        const v48 = stdlib.lt(v43, 3);
        const v49 = v47 ? v48 : false;
        stdlib.assert(v49);
        const txn5 = await ctc.recv('B', 5, 2, 10);
        if (txn5.didTimeout) {
          const txn6 = await ctc.sendrecv('B', 6, 0, [v0, v3, v5, v6, v28, v43], 0, false, async (txn_out, txn6) => {
            const v130 = txn6.value;
            const v131 = stdlib.eq(v130, 0);
            stdlib.assert(v131);
            const v132 = txn6.balance;
            txn_out.transfer(v3, v132);
            return true; });
          const v130 = txn6.value;
          const v131 = stdlib.eq(v130, 0);
          stdlib.assert(v131);
          stdlib.assert(true);
          return ['Alice quits']; }
        else {
          const [v50, v51] = txn5.data;
          const v60 = txn5.value;
          const v61 = stdlib.eq(v60, 0);
          stdlib.assert(v61);
          const v62 = stdlib.keccak256(v50, v51);
          const v63 = stdlib.eq(v28, v62);
          stdlib.assert(v63);
          const v64 = stdlib.le(0, v51);
          const v65 = stdlib.lt(v51, 3);
          const v66 = v64 ? v65 : false;
          stdlib.assert(v66);
          const v67 = stdlib.le(0, v51);
          const v68 = stdlib.lt(v51, 3);
          const v69 = v67 ? v68 : false;
          const v70 = stdlib.le(0, v43);
          const v71 = stdlib.lt(v43, 3);
          const v72 = v70 ? v71 : false;
          const v73 = v69 ? v72 : false;
          const v74 = stdlib.sub(4, v43);
          const v75 = stdlib.add(v51, v74);
          const v76 = stdlib.mod(v75, 3);
          const v77 = v72 ? 0 : 1;
          const v78 = v69 ? 2 : v77;
          const v79 = v73 ? v76 : v78;
          const v118 = stdlib.isType('bool', await interact.outcome());
          const v119 = stdlib.le(0, v79);
          const v120 = stdlib.lt(v79, 5);
          const v121 = v119 ? v120 : false;
          stdlib.assert(v121);
          const v122 = stdlib.eq(v79, 0);
          const v123 = stdlib.eq(v79, 1);
          const v124 = stdlib.eq(v79, 2);
          const v125 = stdlib.eq(v79, 3);
          const v126 = v125 ? 'Alice quits' : 'Bob quits';
          const v127 = v124 ? 'Alice wins' : v126;
          const v128 = v123 ? 'Draw' : v127;
          const v129 = v122 ? 'Bob wins' : v128;
          return [v129]; } } } } }

export async function O(stdlib, ctc, interact) {
  const txn0 = { balance: 0, value: 0 };
  const txn1 = await ctc.recv('O', 1, 2, false);
  const [v5, v6] = txn1.data;
  const v0 = txn1.from;
  const v9 = txn1.value;
  const v10 = stdlib.add(v5, v6);
  const v11 = stdlib.eq(v9, v10);
  stdlib.assert(v11);
  const txn2 = await ctc.recv('O', 2, 0, 10);
  if (txn2.didTimeout) {
    const txn3 = await ctc.recv('O', 9, 0, false);
    const [] = txn3.data;
    const v139 = txn3.value;
    const v140 = stdlib.eq(v139, 0);
    stdlib.assert(v140);
    stdlib.assert(true);
    return ['Bob quits']; }
  else {
    const [] = txn2.data;
    const v3 = txn2.from;
    const v13 = txn2.value;
    const v14 = stdlib.eq(v13, v5);
    stdlib.assert(v14);
    const txn3 = await ctc.recv('O', 3, 1, 10);
    if (txn3.didTimeout) {
      const txn4 = await ctc.recv('O', 8, 0, false);
      const [] = txn4.data;
      const v136 = txn4.value;
      const v137 = stdlib.eq(v136, 0);
      stdlib.assert(v137);
      stdlib.assert(true);
      return ['Alice quits']; }
    else {
      const [v28] = txn3.data;
      const v30 = txn3.value;
      const v31 = stdlib.eq(v30, 0);
      stdlib.assert(v31);
      const txn4 = await ctc.recv('O', 4, 1, 10);
      if (txn4.didTimeout) {
        const txn5 = await ctc.recv('O', 7, 0, false);
        const [] = txn5.data;
        const v133 = txn5.value;
        const v134 = stdlib.eq(v133, 0);
        stdlib.assert(v134);
        stdlib.assert(true);
        return ['Bob quits']; }
      else {
        const [v43] = txn4.data;
        const v45 = txn4.value;
        const v46 = stdlib.eq(v45, 0);
        stdlib.assert(v46);
        const v47 = stdlib.le(0, v43);
        const v48 = stdlib.lt(v43, 3);
        const v49 = v47 ? v48 : false;
        stdlib.assert(v49);
        const txn5 = await ctc.recv('O', 5, 2, 10);
        if (txn5.didTimeout) {
          const txn6 = await ctc.recv('O', 6, 0, false);
          const [] = txn6.data;
          const v130 = txn6.value;
          const v131 = stdlib.eq(v130, 0);
          stdlib.assert(v131);
          stdlib.assert(true);
          return ['Alice quits']; }
        else {
          const [v50, v51] = txn5.data;
          const v60 = txn5.value;
          const v61 = stdlib.eq(v60, 0);
          stdlib.assert(v61);
          const v62 = stdlib.keccak256(v50, v51);
          const v63 = stdlib.eq(v28, v62);
          stdlib.assert(v63);
          const v64 = stdlib.le(0, v51);
          const v65 = stdlib.lt(v51, 3);
          const v66 = v64 ? v65 : false;
          stdlib.assert(v66);
          const v67 = stdlib.le(0, v51);
          const v68 = stdlib.lt(v51, 3);
          const v69 = v67 ? v68 : false;
          const v70 = stdlib.le(0, v43);
          const v71 = stdlib.lt(v43, 3);
          const v72 = v70 ? v71 : false;
          const v73 = v69 ? v72 : false;
          const v74 = stdlib.sub(4, v43);
          const v75 = stdlib.add(v51, v74);
          const v76 = stdlib.mod(v75, 3);
          const v77 = v72 ? 0 : 1;
          const v78 = v69 ? 2 : v77;
          const v79 = v73 ? v76 : v78;
          const v118 = stdlib.isType('bool', await interact.outcome());
          const v119 = stdlib.le(0, v79);
          const v120 = stdlib.lt(v79, 5);
          const v121 = v119 ? v120 : false;
          stdlib.assert(v121);
          const v122 = stdlib.eq(v79, 0);
          const v123 = stdlib.eq(v79, 1);
          const v124 = stdlib.eq(v79, 2);
          const v125 = stdlib.eq(v79, 3);
          const v126 = v125 ? 'Alice quits' : 'Bob quits';
          const v127 = v124 ? 'Alice wins' : v126;
          const v128 = v123 ? 'Draw' : v127;
          const v129 = v122 ? 'Bob wins' : v128;
          return [v129]; } } } } }

export const ETH = {
  ABI: [{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_bal","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v5","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v6","type":"uint256"}],"name":"e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_bal","type":"uint256"}],"name":"e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_bal","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v28","type":"uint256"}],"name":"e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_bal","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v43","type":"uint256"}],"name":"e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_bal","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v50","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v51","type":"uint256"}],"name":"e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_bal","type":"uint256"}],"name":"e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_bal","type":"uint256"}],"name":"e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_bal","type":"uint256"}],"name":"e8","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_bal","type":"uint256"}],"name":"e9","type":"event"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_last","type":"uint256"},{"internalType":"uint256","name":"v5","type":"uint256"},{"internalType":"uint256","name":"v6","type":"uint256"}],"name":"m1","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_last","type":"uint256"},{"internalType":"address payable","name":"v0","type":"address"},{"internalType":"uint256","name":"v5","type":"uint256"},{"internalType":"uint256","name":"v6","type":"uint256"}],"name":"m2","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_last","type":"uint256"},{"internalType":"address payable","name":"v0","type":"address"},{"internalType":"address payable","name":"v3","type":"address"},{"internalType":"uint256","name":"v5","type":"uint256"},{"internalType":"uint256","name":"v6","type":"uint256"},{"internalType":"uint256","name":"v28","type":"uint256"}],"name":"m3","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_last","type":"uint256"},{"internalType":"address payable","name":"v0","type":"address"},{"internalType":"address payable","name":"v3","type":"address"},{"internalType":"uint256","name":"v5","type":"uint256"},{"internalType":"uint256","name":"v6","type":"uint256"},{"internalType":"uint256","name":"v28","type":"uint256"},{"internalType":"uint256","name":"v43","type":"uint256"}],"name":"m4","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_last","type":"uint256"},{"internalType":"address payable","name":"v0","type":"address"},{"internalType":"address payable","name":"v3","type":"address"},{"internalType":"uint256","name":"v5","type":"uint256"},{"internalType":"uint256","name":"v6","type":"uint256"},{"internalType":"uint256","name":"v28","type":"uint256"},{"internalType":"uint256","name":"v43","type":"uint256"},{"internalType":"uint256","name":"v50","type":"uint256"},{"internalType":"uint256","name":"v51","type":"uint256"}],"name":"m5","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_last","type":"uint256"},{"internalType":"address payable","name":"v0","type":"address"},{"internalType":"address payable","name":"v3","type":"address"},{"internalType":"uint256","name":"v5","type":"uint256"},{"internalType":"uint256","name":"v6","type":"uint256"},{"internalType":"uint256","name":"v28","type":"uint256"},{"internalType":"uint256","name":"v43","type":"uint256"}],"name":"m6","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_last","type":"uint256"},{"internalType":"address payable","name":"v0","type":"address"},{"internalType":"address payable","name":"v3","type":"address"},{"internalType":"uint256","name":"v5","type":"uint256"},{"internalType":"uint256","name":"v6","type":"uint256"},{"internalType":"uint256","name":"v28","type":"uint256"}],"name":"m7","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_last","type":"uint256"},{"internalType":"address payable","name":"v0","type":"address"},{"internalType":"address payable","name":"v3","type":"address"},{"internalType":"uint256","name":"v5","type":"uint256"},{"internalType":"uint256","name":"v6","type":"uint256"}],"name":"m8","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_last","type":"uint256"},{"internalType":"address payable","name":"v0","type":"address"},{"internalType":"uint256","name":"v5","type":"uint256"},{"internalType":"uint256","name":"v6","type":"uint256"}],"name":"m9","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]
  ,
  
  Bytecode: "0x600060a08181524360c0526040608081905260e0815290209055610ebe806100286000396000f3fe6080604052600436106100865760003560e01c80639a4d12fa116100595780639a4d12fa146101845780639ccddd3a146101d2578063aca9518f1461020a578063b0f936991461024c578063f6578ede146102a857610086565b806317448f4d1461008b5780631cfcb365146100d55780637a52ccb3146101235780637de71f081461014c575b600080fd5b6100d3600480360360c08110156100a157600080fd5b508035906001600160a01b03602082013581169160408101359091169060608101359060808101359060a001356102f0565b005b6100d3600480360360e08110156100eb57600080fd5b508035906001600160a01b03602082013581169160408101359091169060608101359060808101359060a08101359060c00135610408565b6100d36004803603606081101561013957600080fd5b508035906020810135906040013561055b565b6100d36004803603608081101561016257600080fd5b508035906001600160a01b036020820135169060408101359060600135610646565b6100d3600480360360e081101561019a57600080fd5b508035906001600160a01b03602082013581169160408101359091169060608101359060808101359060a08101359060c0013561074d565b6100d3600480360360808110156101e857600080fd5b508035906001600160a01b03602082013516906040810135906060013561086d565b6100d3600480360360a081101561022057600080fd5b508035906001600160a01b03602082013581169160408101359091169060608101359060800135610983565b6100d3600480360361012081101561026357600080fd5b508035906001600160a01b03602082013581169160408101359091169060608101359060808101359060a08101359060c08101359060e0810135906101000135610a94565b6100d3600480360360c08110156102be57600080fd5b508035906001600160a01b03602082013581169160408101359091169060608101359060808101359060a00135610d02565b6040805160036020808301919091528183018990526001600160601b0319606089811b82168185015288901b1660748301526088820186905260a8820185905260c88083018590528351808403909101815260e890920190925280519101206000541461035c57600080fd5b336001600160a01b0386161461037157600080fd5b600a86014310158015610382575060015b61038b57600080fd5b341561039657600080fd5b6040516001600160a01b03861690303180156108fc02916000818181858888f193505050501580156103cc573d6000803e3d6000fd5b50604080513031815290517ffc55d683ac816a7149ebdfa999ae1bcfeeae27c37c9dab64a23f617beed2a0079181900360200190a16000805533ff5b6040805160036020808301919091528183018a90526001600160601b031960608a811b82168185015289901b1660748301526088820187905260a8820186905260c88083018690528351808403909101815260e890920190925280519101206000541461047457600080fd5b336001600160a01b0386161461048957600080fd5b600a8701431061049857600080fd5b34156104a357600080fd5b600381106104b057600080fd5b60408051303181526020810183905281517fb71d350b59ceca5c6544e5367d61ca8cae3e36b25f8d900743d063dff3d6508b929181900390910190a160408051600460208083019190915243828401526001600160601b03196060998a1b81168a8401529790981b9096166074870152608886019490945260a885019290925260c884015260e880840191909152815180840390910181526101089092019052805191012060005550565b604080516000602080830182905282840187905283518084038501815260609093019093528151919092012090541461059357600080fd5b61059b610e3b565b33815281830134146105ac57600080fd5b60408051303181526020810185905280820184905290517f219cc811755104876269c7553666684eaaeecb90b6a7ffc6fdd5068140059b8e9181900360600190a15160408051600160208083019190915243828401526001600160601b0319606094851b169382019390935260748101949094526094808501939093528051808503909301835260b4909301909252805191012060005550565b604080516001602080830191909152818301879052606086811b6001600160601b031916908301526074820185905260948083018590528351808403909101815260b49092019092528051910120600054146106a157600080fd5b336001600160a01b038416146106b657600080fd5b600a840143101580156106c7575060015b6106d057600080fd5b34156106db57600080fd5b6040516001600160a01b03841690303180156108fc02916000818181858888f19350505050158015610711573d6000803e3d6000fd5b50604080513031815290517fc92018b4e91e597d736654f7b1d2ec034c5fec5920e2cfe22e15b4ddcdf5e18a9181900360200190a16000805533ff5b6040805160046020808301919091528183018a90526001600160601b031960608a811b82168185015289901b1660748301526088820187905260a8820186905260c8820185905260e8808301859052835180840390910181526101089092019092528051910120600054146107c157600080fd5b336001600160a01b038616146107d657600080fd5b600a870143101580156107e7575060015b6107f057600080fd5b34156107fb57600080fd5b6040516001600160a01b03861690303180156108fc02916000818181858888f19350505050158015610831573d6000803e3d6000fd5b50604080513031815290517fcb3347bd475fd43f41b4bc5bb011db952f2079e6ba9a82ff211988cd7871dba69181900360200190a16000805533ff5b604080516001602080830191909152818301879052606086811b6001600160601b031916908301526074820185905260948083018590528351808403909101815260b49092019092528051910120600054146108c857600080fd5b6108d0610e3b565b338152600a850143106108e257600080fd5b8234146108ee57600080fd5b604080513031815290517ff04f5fc87a72102f7c0b228f8bbaf9b9aa7a2b5dc295c86538fdde91e95866e99181900360200190a15160408051600260208083019190915243828401526001600160601b0319606097881b8116888401529390961b9092166074830152608882019390935260a8808201929092528251808203909201825260c801909152805191012060005550565b6040805160026020808301919091528183018890526001600160601b0319606088811b82168185015287901b1660748301526088820185905260a88083018590528351808403909101815260c89092019092528051910120600054146109e857600080fd5b336001600160a01b038416146109fd57600080fd5b600a85014310158015610a0e575060015b610a1757600080fd5b3415610a2257600080fd5b6040516001600160a01b03841690303180156108fc02916000818181858888f19350505050158015610a58573d6000803e3d6000fd5b50604080513031815290517f3a6f8023909a26b76d462631fcdf570dbe3740447548e09470d1ad04394a0cec9181900360200190a16000805533ff5b6040805160046020808301919091528183018c90526001600160601b031960608c811b8216818501528b901b1660748301526088820189905260a8820188905260c8820187905260e880830187905283518084039091018152610108909201909252805191012060005414610b0857600080fd5b610b10610e4d565b336001600160a01b038a1614610b2557600080fd5b600a8a014310610b3457600080fd5b3415610b3f57600080fd5b604080516020808201869052818301859052825180830384018152606090920190925280519101208514610b7257600080fd5b60038210610b7f57600080fd5b60038083108083529085106020830152610b9a576000610ba0565b80602001515b610bca578051610bc2578060200151610bba576001610bbd565b60005b610bc5565b60025b610bdb565b600384600403830181610bd957fe5b065b60408201819052600281146060830181905290156080830181905260a0830182905260c08301526001600160a01b038a16906108fc90610c2c578260c00151610c245788610c27565b60005b610c31565b886002025b88019081150290604051600060405180830381858888f19350505050158015610c5e573d6000803e3d6000fd5b50876001600160a01b03166108fc8260a00151610c8e578260c00151610c845788610c89565b886002025b610c91565b60005b6040518115909202916000818181858888f19350505050158015610cb9573d6000803e3d6000fd5b5060408051303181526020810185905280820184905290517f3c3023cc427ae7f284b643c954c1a90afba24284d594cded84550e2316e830f49181900360600190a16000805533ff5b6040805160026020808301919091528183018990526001600160601b0319606089811b82168185015288901b1660748301526088820186905260a88083018690528351808403909101815260c8909201909252805191012060005414610d6757600080fd5b336001600160a01b03861614610d7c57600080fd5b600a86014310610d8b57600080fd5b3415610d9657600080fd5b60408051303181526020810183905281517f94dd7e08991b8945fde2d5865f7071e72045b9800e293ff60d29c6960c5a4fb5929181900390910190a160408051600360208083019190915243828401526001600160601b0319606098891b8116898401529690971b9095166074860152608885019390935260a884019190915260c8808401919091528151808403909101815260e89092019052805191012060005550565b60408051602081019091526000815290565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091529056fea265627a7a72315820ccdbe16defd05175e6bf126e8426974f84274c58de742d7d0ceb48c74c5435d564736f6c634300050c0032"
  ,
  
  Bytecode2: "0x60006000524360205260006040206000556034601d600039600080f3fe607756fe6000805533fffe600080fdfe6000357ff525749d78acc1850262e7e5e1cc5d4c8ef17693229877c9f1fb98e4e5145b0a14366084141619600b5760606024600037600160605260045160805260005160a05260205160c05260405160e052606060a0206000541419600b57600051331419600b5760043501431019600b577f4974e0511e1142aba56ace19fb538cc1d2ed6b16c2fe388f2ec8b2dbc409a55b60006060a13460605260006060511460805260805119600b573160a052600080808060a05160005161fc08f119600b57600456fe6000357fb7bfa9b5c1cd5249a2e146ec97376e09c8eb0ec4add55cd43b70e478a530644c143660a414161960105760806024600037600260805260045160a05260005160c05260205160e052604051600052606051602052608060c0206000541419600b57602051331419600b5760043501431019600b577f4e58f06d9372c6ab5437d6ee8473425355a8189704fd7342b3e5b6b93ad4a3ff60006080a13460805260006080511460a05260a05119600b573160c052600080808060c05160205161fc08f119600b57600456fe6000357fb998cae249dda75229927d907c88e2a638cad8745c4b78009a2308f270a65d7d143660c414161960d75760a06024600037600360a05260045160c05260005160e05260205160005260405160205260605160405260805160605260a060e0206000541419600b57600051331419600b5760043501431019600b577fb970f053dad6b1e9930a66d5b2ad970d9b8bd6fe87e8b1a548e23ab084b85d86600060a0a13460a052600060a0511460c05260c05119600b573160e052600080808060e05160005161fc08f119600b57600456fe6000357f6224342a6c646d9e7050b4c877fbd02aaf2e450e80d9dde89292da84385babf8143660e414161960a45760c06024600037600460c05260045160e05260005160005260205160205260405160405260605160605260805160805260a05160a05260c0610001206000541419600b57602051331419600b5760043501431019600b577fb62fd2e0bd0fa0a08db19ecbed8856c1526909b8e2fc34b339497b67794469d6600060c0a13460c052600060c0511460e05260e05119600b5731600052600080808060005160205161fc08f119600b57600456fe6000357fdeddfee83c20709730f8062b950e2f76feeec7b4ab4e8def66156064c8f9331a14366124011416196077576100016024600037600460005260045160205260005160405260205160605260405160805260605160a05260805160c05260a05160e052610001610001206000541419600b57600051331419600b5760043501431019600b577f4c403f35a3d15cf176d1bb4d563fd1f2fc05feaa796187f8a1d0ce19ea9b2e49604060c0a13460005260006000511460205260205119600b5760c05160405260e0516060526140016040206040526040516080511460605260605119600b5760e05160001119608052600360e0511060a052600060a05160805160a35750605b5660c05260c05119600b5760e0516000111960e052600360e05110600052600060005160e051609e575060875660205260a05160001119604052600360a0511060605260006060516040516099575060ac5660805260006080516020516094575060be5660a05260a05160040360c05260c05160e0510160e052600360e0510660005260016000608051608f575060eb566020526020516002602051608a575060fd5660405260405160005160a051608557506010566060526060516000111960805260056060511060a052600060a0516080516080575060355660c05260026060511460e05260e05160001119600052600360e051106020526000602051600051607b57506063566040526001600060e0516076575060745660605260405160016060516071575060865660805260006060511460a05260a0516000111960c052600360a0511060e052600060e05160c051606c575060b4566000526001600060a0516067575060c55660205260005160016020516062575060d756604052600260605114606052600060e051146080526000606051608051605d575060fb5660a052600160e0511460c052600060605160c0516058575060165660e052600260e05114600052600060605160005160535750603156602052600060605114604052600060a051146060526000604051606051604e5750605556608052600160a0511460a052600060405160a0516049575060705660c052600260a0511460e052600060405160e05160445750608b566000526002606051146020526040516002026040526000606051146060526040516002026080526040516000606051603f575060c15660a052604051608051606051603a575060d45660c05260a0516040516020516035575060e75660e05260c05160006020516030575060f95660005260e05160605101602052600080808060205160005161fc08f119600b57600080808060005160205161fc08f119600b57600456fe905060f956905060e756905060d456905060c1569050608b569050607056905060555690506031569050601656905060fb56905060d756905060c556905060b45690506086569050607456905060635690506035569050601056905060fd56905060eb56905060be56905060ac5690506087569050605b566000357f3b4cf92394009deec5a5110e4172974c33e2cc5934d71f983896c8aac1eadc29143660e414161960515760c06024600037600360c05260045160e05260005160005260205160205260405160405260605160605260805160805260c060e0206000541419600b57602051331419600b5760043501431019600b577fefed37a8ef2bc7182b139aa9a29d16e77bfb7a0cae23b1ad62bfb6ef7ab472a1602060a0a13460c052600060c0511460e05260e05119600b5760a05160001119600052600360a05110602052600060205160005160c4575060825660405260405119600b5760046060524360805260005160a05260205160c05260405160e05260605160005260805160205260a05160405261600161000120600055fe90506082566000357fca35541959b4f1674fddcc439065e5f4d4d3f7da4f8b55ad6ce2d4e49c06b08b143660c414161960a85760a06024600037600260a05260045160c05260005160e05260205160005260405160205260605160405260a060c0206000541419600b57600051331419600b5760043501431019600b577f82e3bb32335fc0f729b9e3e6cb90526a2c11ab7b93b46ce2dd4563afa59a8a4b60206080a13460a052600060a0511460c05260c05119600b57600360e0524360005260005160205260205160405260405160605260605160805260805160a05260e060e020600055fe6000357ff99ddf133b9d9ac6690398101a5682f8cb56c3a45b13c7de0261481dda7cf7241436608414161960c95760606024600037600160605260045160805260005160a05260205160c05260405160e052606060a0206000541419600b5760043501431019600b577f354083e34305e43504f607a379840b90a0c97b23b093bfbf711fd18fe8f9319b60006060a1346060526020516060511460805260805119600b57600260a0524360c05260005160e0523360005260205160205260405160405260a060c020600055fe6000357e02386cf5fba9a8d2a4bc437ca6b821b100edc28a40ac9b2c578dfd80990d201436606414161960ab5760406024600037600060405260045160605260406040206000541419600b5760043501431019600b577fb0faad912ce7b8154a3a2b1aac5debe799c670f51814db7da1c5b85bb3da9e4460406000a134604052602051600051016060526060516040511460805260805119600b57600160a0524360c0523360e05260005160005260205160205260a060a020600055fe" };

export const ALGO = {
  LogicSigProgram: `AiAEAgYAASIyBA5BABMzABAjEkEACzMAGC0SQQADQgACJEMlQw==`
  ,
  
  ApprovalProgram: `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`
  ,
  
  ClearStateProgram: `AiABASI=` };