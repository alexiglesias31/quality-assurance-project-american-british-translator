const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {
    suite('Translation to British English', () => {
        test('Mangoes are my favorite fruit.', () => {
            assert.equal(translator.toBritish('Mangoes are my favorite fruit.', false), 'Mangoes are my favourite fruit.')
        })
        test('I ate yogurt for breakfast.', () => {
            assert.equal(translator.toBritish('I ate yogurt for breakfast.', false), 'I ate yoghurt for breakfast.')
        })
        test('We had a party at my friend\'s condo.', () => {
            assert.equal(translator.toBritish('We had a party at my friend\'s condo.', false), 'We had a party at my friend\'s flat.')
        })
        test('Can you toss this in the trashcan for me?', () => {
            assert.equal(translator.toBritish('Can you toss this in the trashcan for me?', false), 'Can you toss this in the bin for me?')
        })
        test('The parking lot was full.', () => {
            assert.equal(translator.toBritish('The parking lot was full.', false), 'The car park was full.')
        })
        test('Like a high tech Rube Goldberg machine.', () => {
            assert.equal(translator.toBritish('Like a high tech Rube Goldberg machine.', false), 'Like a high tech Heath Robinson device.')
        })
        test('To play hooky means to skip class or work.', () => {
            assert.equal(translator.toBritish('To play hooky means to skip class or work.', false), 'To bunk off means to skip class or work.')
        })
        test('No Mr. Bond, I expect you to die.', () => {
            assert.equal(translator.toBritish('No Mr. Bond, I expect you to die.', false), 'No Mr Bond, I expect you to die.')
        })
        test('Dr. Grosh will see you now.', () => {
            assert.equal(translator.toBritish('Dr. Grosh will see you now.', false), 'Dr Grosh will see you now.')
        })
        test('Lunch is at 12:15 today.', () => {
            assert.equal(translator.toBritish('Lunch is at 12:15 today.', false), 'Lunch is at 12.15 today.')
        })
    })
    suite('Translation to American English', () => {
        test('We watched the footie match for a while.', () => {
            assert.equal(translator.toAmerican('We watched the footie match for a while.', false), 'We watched the soccer match for a while.')
        })
        test('Paracetamol takes up to an hour to work.', () => {
            assert.equal(translator.toAmerican('Paracetamol takes up to an hour to work.', false), 'Tylenol takes up to an hour to work.')
        })
        test('First, caramelise the onions.', () => {
            assert.equal(translator.toAmerican('First, caramelise the onions.', false), 'First, caramelize the onions.')
        })
        test('I spent the bank holiday at the funfair.', () => {
            assert.equal(translator.toAmerican('I spent the bank holiday at the funfair.', false), 'I spent the public holiday at the carnival.')
        })
        test('I had a bicky then went to the chippy.', () => {
            assert.equal(translator.toAmerican('I had a bicky then went to the chippy.', false), 'I had a cookie then went to the fish-and-chip shop.')
        })
        test('I\'ve just got bits and bobs in my bum bag.', () => {
            assert.equal(translator.toAmerican('I\'ve just got bits and bobs in my bum bag.', false), 'I\'ve just got odds and ends in my fanny pack.')
        })
        test('The car boot sale at Boxted Airfield was called off.', () => {
            assert.equal(translator.toAmerican('The car boot sale at Boxted Airfield was called off.', false), 'The swap meet at Boxted Airfield was called off.')
        })
        test('Have you met Mrs Kalyani?', () => {
            assert.equal(translator.toAmerican('Have you met Mrs Kalyani?', false), 'Have you met Mrs. Kalyani?')
        })
        test('Prof Joyner of King\'s College, London.', () => {
            assert.equal(translator.toAmerican('Prof Joyner of King\'s College, London.', false), 'Prof. Joyner of King\'s College, London.')
        })
        test('Tea time is usually around 4 or 4.30.', () => {
            assert.equal(translator.toAmerican('Tea time is usually around 4 or 4.30.', false), 'Tea time is usually around 4 or 4:30.')
        })
    })
    suite('Highlight translations', () => {
        test('Mangoes are my favorite fruit.', () => {
            assert.equal(translator.translate('Mangoes are my favorite fruit.', 'us'), 'Mangoes are my <span class="highlight">favourite</span> fruit.')
        })
        test('I ate yogurt for breakfast.', () => {
            assert.equal(translator.translate('I ate yogurt for breakfast.', 'us'), 'I ate <span class="highlight">yoghurt</span> for breakfast.')
        })
        test('We watched the footie match for a while.', () => {
            assert.equal(translator.translate('We watched the footie match for a while.', 'uk'), 'We watched the <span class="highlight">soccer</span> match for a while.')
        })
        test('Paracetamol takes up to an hour to work.', () => {
            assert.equal(translator.translate('Paracetamol takes up to an hour to work.', 'uk'), '<span class="highlight">Tylenol</span> takes up to an hour to work.')
        })
    })
});
