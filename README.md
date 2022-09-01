# BrandonGS Portfolio

## How to use it?

```bash
git clone https://github.com/brandon-gs/my-portfolio.git
cd my-portfolio
npm install
# or
yarn install

npm run dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

Has i18n implementation to get a portfolio with multiple languages

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.

This project is deployed in [brandongs.me](https://www.brandongs.me):

## TODO

- [ ] Update material-ui version
- [ ] Implement i18n complement to use json file instead the useTranslation hook
