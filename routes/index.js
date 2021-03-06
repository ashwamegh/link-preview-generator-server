var express = require('express');
var router = express.Router();
const linkPreviewGenerator = require('link-preview-generator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/parse/link',async (req, res) => {
	try {
		const { url } = req.body;
		// adds args for puppeteer
		const previewData = await linkPreviewGenerator(url, [
			'--no-sandbox',
			'--disable-setuid-sandbox'
		  ]);
		return res.json(previewData);
	} catch (error) {
		return res.status(500).json(error);
	}
})

module.exports = router;
