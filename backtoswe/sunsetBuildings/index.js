function findSunsetBuildings(buildings) {
    const stack = [];

    // traverse from east to west
    for (let i = buildings.length - 1; i >= 0; i--) {
        let building = buildings[i];
        let nextBuildingToCompare = 0;

        while (stack.length > 0) {
            nextBuildingToCompare = stack[stack.length - 1];
            if (building >= nextBuildingToCompare)
                stack.pop();
            else break;
        }
        stack.push(building);
    }

    return stack;
}

module.exports = {findSunsetBuildings}