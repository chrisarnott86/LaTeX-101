# Installing <latex/>

The process and software choices for installing <latex/> vary by
platform, so choose your platform to find out how to install.

[[toc]]

In general for each system a distribution of <latex/> is installed together with
an editor or development environment to make life a little easier.

The most beginner friendly option for any platform is the editor
[LyX](https://www.lyx.org/), which presents an interface more like a standard
word processor. If you decide to use LyX, you need to install a <latex/>
distribution first.

## Windows

For Windows the standard distribution is [MikTex](https://miktex.org/).

Here is a video explaining the installation process for Windows.

<!--<embed width="740" height="Y432" src="https://www.youtube.com/embed/uKetjJTDSqk">-->
<!--<embed src="https://www.youtube.com/embed/uKetjJTDSqk">-->
<WindowsVideo />

Two popular choices for <latex/> editors are linked below, with installers
available for Windows.

* [Texmaker](https://www.xm1math.net/texmaker/)
* [Texstudio](https://www.texstudio.org/)

## macOS

For macOS, the standard installation is [MacTex](https://www.tug.org/mactex/), 
this bundles the MacTex distribution together with the TeXShop editor and some
other utilities. One install file is all you need.

Download the [installer](https://www.tug.org/mactex/mactex-download.html) to get
started.

View the video for a complete overview of using MacTex

<!--<embed src="https://www.youtube.com/embed/7u4_gzx-9rE">-->
<MacVideo />

## Linux

For Linux, TexLive is the standard distribution, with several different <latex/>
specific editors and IDEs available.

For any Debian or Redhat derived system, installation is a simple terminal 
command.

<code-group>
<code-block title="apt">
```bash
sudo apt install texlive
```
</code-block>

<code-block title="yum">
```bash
sudo yum install texlive
```
</code-block>
</code-group>


To write <latex/> documents you can use any editor or IDE, you may already be a vim
or emacs fan in which case stick with what you know. Here are some alternative
editors you may want to try.

* [Texmaker](https://www.xm1math.net/texmaker/)
* [Texstudio](https://www.texstudio.org/)
* [Gummi](https://github.com/alexandervdm/gummi)

## Online

Using an online service simplifies much of the process, as there's no need to install
anything.

[Overleaf](https://www.overleaf.com/), is one of the main online <latex/> services.
It is primarily a paid service, but a free tier is available which lacks the
collaborative features of the paid service.
