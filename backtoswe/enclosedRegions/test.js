const {computeEnclosedRegions} = require('./index');

test('it works', () => {
    const matrix = [
        ["X","X","X","X"],
        ["X","O","O","X"],
        ["X","X","O","X"],
        ["X","O","X","X"]]
    
    const result = computeEnclosedRegions(matrix);

    expect(result).toEqual([
        ["X","X","X","X"],
        ["X","X","X","X"],
        ["X","X","X","X"],
        ["X","O","X","X"]
    ]);
});

test('it works with another data set', () => {
    const matrix = [
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "O", "O", "O"],
        ["O", "O", "X", "O", "X", "X"],
        ["X", "O", "X", "X", "O", "X"],
        ["O", "X", "X", "O", "X", "X"],
        ["X", "X", "X", "X", "X", "X"],]
    
    const result = computeEnclosedRegions(matrix);

    expect(result).toEqual([
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "O", "O", "O"],
        ["O", "O", "X", "O", "X", "X"],
        ["X", "O", "X", "X", "X", "X"],
        ["O", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"],
    ]);
});