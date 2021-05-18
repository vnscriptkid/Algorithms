function precompute(folders=[]) {
    const mapping = new Map();

    for (let [folder, parent] of folders) {
        mapping.set(folder, parent);
    }
    
    return mapping;
}

function hasAccess(access=[], folders=[], target) {
    const folderToParent = precompute(folders);

    let cur = target;
    while (cur) {
        if (access.includes(cur)) return true;
        
        cur = folderToParent.get(cur);
    }

    return false;
}

module.exports = { hasAccess, precompute }