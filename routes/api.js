'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body.text
      let locale = req.body.locale

      if(text === undefined || locale === undefined) {
        res.json({
          error: 'Required field(s) missing'
        })
        return
      }

      if(text === '') {
        res.json({
          error: 'No text to translate'
        })
        return
      }

      locale = locale === 'american-to-british' ? 'us' : locale === 'british-to-american' ? 'uk' : false

      if(!locale) {
        res.json({
          error: 'Invalid value for locale field'
        })
        return
      }

      let translated = translator.translate(text, locale)

      if(text === translated) {
        res.json({
          text: text,
          translation: 'Everything looks good to me!'
        })
        return
      }

      res.json({
        text: text,
        translation: translated
      })
    });
};
