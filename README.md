# Project Core

RTube is an open-source project that allows users to download videos
from YouTube passing its URL. The user can also choose between download
full video and audio or downloading just its audio.

## Installation for Linux

Start cloning the repository:

```
git clone git@github.com:PedroKaram/RTube.git
```

Now you need to execute init.sh file, this will install the following dependencies:
<details>
  <summary>Dependencies List</summary>
  <ul>
    <li>libwebkit2gtk-4.0-dev</li>
    <li>build-essential</li>
    <li>curl</li>
    <li>wget</li>
    <li>file</li>
    <li>libssl-dev</li>
    <li>libgtk-3-dev</li>
    <li>libayatana-appindicator3-dev</li>
    <li>librsvg2-dev</li>
  </ul>
</details>

To execute the init.sh file, you need to turn it into a executable first:
make sure you are in projects directory

```
cd RTube
chmod +x init.sh
```

Then run `./init.sh` to execute it

Now you have to install rust for Linux:
<a href="https://linuxh2o.com/how-to-install-latest-rust-on-linux/#google_vignette" target="_blank">How to install latest Rust on Linux</a>

Now install node dependencies using yarn:

```
yarn install
```

## Installation for Windows

Start cloning the repository:

```
git clone git@github.com:PedroKaram/RTube.git
```

Now you have to install rust, follow the official documentation:
<a href="https://www.rust-lang.org/tools/install" target="_blank">Rust Installation Official Website</a>

## Building and running the project

To run the project you have to build it and start it using yarn and tauri:

```
yarn build
yarn tauri dev
```

Now the app should be running in development mode.\
Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Check React documentation

<a href="https://facebook.github.io/create-react-app/docs/getting-started" target="_blank">Create React App documentation</a>

<a href="https://reactjs.org/" target="_blank">React documentation</a>
