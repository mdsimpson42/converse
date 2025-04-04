# ConveRSE

Prototype Jekyll site for the ConveRSE website, part of my SSI Fellowship.

## Installation

Step 1 - The app requires Ruby (and the Dev Kit). Download the [Windows Installer](https://rubyinstaller.org/).

- Install the version with the dev kit and tick the box at the end to install MSYS2 and the development toolchain.

Step 2 - Install Jekyll using `gem install jekyll bundler`.

Step 3 - You may have to run `bundle install` to install any remaining dependencies.

More info can be found in the [Jekyll Documentation](https://jekyllrb.com/docs/).

## Running Locally

To run locally, use `bundle exec jekyll serve --livereload`, which will run a local webserver at `http://localhost:4000/converse`.
The page will automatically reload when changes are made.
