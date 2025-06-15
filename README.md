# ConveRSE

Code for the ConveRSE website, a hub for mental health information, resources and support, 
created as part of [Mike Simpson's](https://www.software.ac.uk/fellowship-programme/mike-simpson) SSI Fellowship.

Some basic information about the site and the code is included below. More can be found on [the Wiki](https://github.com/mdsimpson42/converse/wiki).

## Contributing

As part of the ConveRSE project, we hope to collect blog posts about mental health from a wide and diverse subset of the community.  
You can submit a blog post following [these instructions](https://github.com/mdsimpson42/converse/wiki) on the Wiki or using [this form](https://forms.gle/p8LwvSPBNcywJbFj8). 

## Installation

The site has been developed on Windows. To run a local version for testing, you will need to follow these instructions:

**1 - The app requires Ruby. Download the [Windows Installer](https://rubyinstaller.org/).**

- Install the version with the dev kit and tick the box at the end to install MSYS2 and the development toolchain.

**2 - Install Jekyll using `gem install jekyll bundler`.**

**3 - You may have to run `bundle install` to install any remaining dependencies.**

More info can be found in the [Jekyll Documentation](https://jekyllrb.com/docs/).

## Running Locally

To run locally, use `bundle exec jekyll serve --livereload`, which will run a local web server at `http://localhost:4000/converse`.
The page will automatically reload when changes are made.
