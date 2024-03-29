import { Request, Response, NextFunction } from 'express';
import shortid from 'shortid';
import { URL } from '../models/URL';
import validator from 'validator';

export const Redirect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const shortUrl = req.params.shortId;

  const Url = await URL.findOne({ shortUrl });

  if (!Url) {
    return res.send({ msg: 'Invalid shortUrl' });
  }

  return res.redirect(Url.url);
};

// export const LandPage = (req: Request, res: Response, next: NextFunction) => {
//   console.log('Here');
//   res.setHeader('Content-type', 'text/html');
//   res.write('<html>');
//   res.write('<head><title>Landing page</title></head>');
//   res.write(
//     '<body><h1>Frontend not yet ready, but you can add rJ5v_z8c7 in the url and it will redirect to my portfolio website.</h1></body>'
//   );
//   res.write('</html>');
//   res.end();
// };

export const AddUrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { url } = req.body;

  if (!url) {
    return res.status(404).send({ msg: 'Url not provided' });
  }

  const result = validator.isURL(url, {
    require_protocol: true,
  });

  if (!result) {
    console.log(result);
    return res.status(400).send({ msg: 'invalid url' });
  }

  try {
    const Url = await URL.findOne({ url });

    if (!Url) {
      const shortUrl = shortid.generate();
      let newUrl = new URL({ shortUrl, url });
      await newUrl.save();
      // return res.json({ shorturl: newUrl.shortUrl, url });
      return res.status(201).send({ shorturl: newUrl.shortUrl, url });
    }
    return res.status(200).send({ shorturl: Url.shortUrl, url });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: 'Unknown error' });
  }
};
