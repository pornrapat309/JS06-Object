const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

// const permission34 = Object.assign({}, permission3, permission4); // cc-f cd-t cv-t
// const permission234 = Object.assign({}, permission2, permission34); // cu-t cc-f cd-t cv-t

// const permission = Object.assign({}, permission1, permission234); // cv-t cd-t cu-t cc-f

const permission = Object.assign({}, permission1, permission2, permission3, permission4);

console.log(permission);