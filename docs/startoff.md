# Getting Started

## Introduction

Welcome to <latex/> 101!

Whether you have just heard about <latex/> or have already started out
on a journey of learning this is the place to be!

<latex/> is a document preparation macro language based on the original <TeX/> language
created by Computing Science legend [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)
in 1978.

If you've ever looked at a Computing or Mathematical Science research paper then there's a
very good chance it was prepared in <latex/>!

## How it Works

Unlike preparing a document in word processing software such as MS Word or LibreOffice Writer,
documents in <latex/> are prepared as plain text files, and then processed to produce an output
file (typically a PDF).

This means that a shift in mindset is needed when moving to using <latex/>, instead of the
usual paradigm of WYSIWYG (what you see is what you get), where a document is prepared in a 
word processor and the on screen display matches the final output we move to WYMIWYG (what you mean
is what you get) where we 'markup' the document with instructions about layout and focus mainly 
on the content.

## How to Use This Site

<latex/> 101 provides all the information you need to get started in using <latex/>.

#### [Installing](./install.md)
Has instructions for Windows, Mac OS
and Linux. Once you've got <latex/> installed, you're ready to write!

#### [Creating Documents](./creating.md)
Shows the structure of a <latex/> document and how to
create your first document.

#### [Sandbox](./sandbox.md)
Is where you can dive in and play with a full 
<latex/> document, edit and play to your heart's content.

All the other sections of the guide are there to explain individual
topics within <latex/>.

### Site Code

On <latex/> 101 all code examples are written either as short snippets
like this: `example command`, or in full boxes like this:

```latex
Hello world from \LaTeX{}.
```

All text boxes have a copy button in the bottom right hand corner to make
it easy to copy code examples.


### Live <latex/>

Throughout the site are working examples for you to play with and edit. If
you get an error see if you can fix it!

<ClientOnly>
  <LtxPlaygroundSmall />
</ClientOnly>


### Code Challenges

Within each section, challenges are set for you to test your <latex/> skills against. 
To see the solutions click on the answer to reveal the correct code.

::: details Answer
```latex
\begin{itemize}
  \item One
  \item Two
  \item Three
\end{itemize}
```
:::

### Tips

If something is important or noteworthy it will be presented like this

::: tip Important
<latex/> is fun!
:::

## TLDR

If you're lucky enough to be running Linux, the following should be enough
to get a minimal setup running on a Debian or RedHat derived system.

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


Now create a new text file `nano test.tex` with the contents

```latex
\documentclass[a4paper,12pt]{article}

\begin{document}
Hello world from \LaTeX.
\end{document}
```

Now run `pdflatex test.txt`, and you're done! 


