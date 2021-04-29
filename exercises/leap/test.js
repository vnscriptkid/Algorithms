const {leap} = require('./index') 

test('leap fn returns correct total leap years in between', () => {
    const result = leap(1895, 2021);

    expect(result).toEqual(31);  
});
