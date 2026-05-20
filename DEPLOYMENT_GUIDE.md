# ShopMart Deployment Guide

## 🚀 Deploy to Vercel (Recommended - 1 minute)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: ShopMart e-commerce website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shopmart.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

Done! Your site is live! 🎉

---

## 🌐 Deploy to Netlify

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Using Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Step 3: Or Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Drag the `build` folder to Netlify
3. Your site is live!

---

## 📦 Deploy to AWS S3

### Step 1: Build
```bash
npm run build
```

### Step 2: Upload to S3
```bash
# Install AWS CLI
pip install awscli

# Configure AWS
aws configure

# Upload build folder
aws s3 sync build/ s3://your-bucket-name --delete
```

### Step 3: Enable Static Hosting
In AWS S3 console → Bucket properties → Static website hosting

---

## 🔧 Deploy to GitHub Pages

### Step 1: Update package.json
Add this line:
```json
"homepage": "https://YOUR_USERNAME.github.io/shopmart"
```

### Step 2: Build and Deploy
```bash
npm run build
npm install --save-dev gh-pages
```

### Step 3: Add deploy scripts to package.json
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

### Step 4: Deploy
```bash
npm run deploy
```

---

## 🐳 Deploy with Docker

### Step 1: Create Dockerfile
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
```

### Step 2: Build Image
```bash
docker build -t shopmart:1.0 .
```

### Step 3: Run Container
```bash
docker run -p 3000:3000 shopmart:1.0
```

---

## ☁️ Deploy to Heroku

### Step 1: Create Procfile
```
web: npm start
```

### Step 2: Install Heroku CLI
```bash
# Download from https://devcenter.heroku.com/articles/heroku-cli
heroku login
```

### Step 3: Create App and Deploy
```bash
heroku create your-app-name
git push heroku main
```

---

## 🔒 Environment Variables

Create `.env` file:
```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENVIRONMENT=production
```

Access in code:
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

---

## 📊 Pre-Deployment Checklist

- [ ] Build completes without errors: `npm run build`
- [ ] All links are working
- [ ] Images are loading
- [ ] Search functionality works
- [ ] Cart operations work
- [ ] Filters respond correctly
- [ ] Mobile responsive on all devices
- [ ] Dark mode works properly
- [ ] No console errors (F12)
- [ ] Promo codes work (SAVE10, SAVE20, SUMMER30)

---

## ⚡ Performance Tips

### Before Deployment
1. Compress images
2. Minify CSS/JS
3. Enable code splitting
4. Add lazy loading
5. Optimize fonts

### After Deployment
1. Set up CDN
2. Enable GZIP compression
3. Add caching headers
4. Use image optimization services
5. Monitor performance with Lighthouse

---

## 🔍 Domain Setup

### Vercel/Netlify
1. Go to domain settings
2. Add custom domain
3. Update DNS records
4. SSL certificate auto-generated

### Manual DNS Setup
```
Type: CNAME
Name: www
Value: your-domain-on-provider.com
```

---

## 🚨 Troubleshooting

### Build Fails
```bash
rm -rf node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Module Not Found
```bash
npm install
npm cache clean --force
```

### Images Not Loading
- Check image URLs are correct
- Ensure images are publicly accessible
- Use absolute paths or import statements

---

## 📈 Post-Deployment

### Monitor Performance
- Set up Google Analytics
- Use Lighthouse audits
- Monitor Core Web Vitals
- Check uptime/availability

### Regular Maintenance
- Update dependencies monthly
- Monitor security alerts
- Backup data regularly
- Review logs for errors

---

## 🎯 Next Steps After Deployment

1. **Set up Analytics**
   - Google Analytics
   - Mixpanel
   - Amplitude

2. **Add SEO**
   - Meta descriptions
   - Structured data
   - Sitemap
   - Robots.txt

3. **Performance**
   - CDN setup
   - Image optimization
   - Code splitting
   - Caching strategy

4. **Security**
   - HTTPS (auto with modern hosts)
   - Environment variables
   - Input validation
   - Rate limiting

---

## 🎊 Deployment Complete!

Your ShopMart website is now live! 🎉

Share it with:
- Family & Friends
- Social Media
- Portfolio
- Job Applications

---

## 📞 Support

Having issues? Check:
1. Vercel/Netlify documentation
2. Deployment logs in console
3. GitHub issues
4. Stack Overflow

Good luck! 🚀
