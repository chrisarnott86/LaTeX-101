# Creating <latex/> Documents

All <latex/> documents share the same basic structure, with the following
elements defined.

* Document Class
* Preamble (optional)
* Document Contents

The simplest document then looks like this:

```latex
\documentclass{article}

\begin{document}
Hello, world
\end{document}
```

## Document Class

All documents written in <latex/> have a class associated with them. The common
options are `article`, `report`, `book` and `letter`.

Each of these options will define certain parameters suitable for that type
of document (e.g. a `book` may have chapters). 

For starting out it's generally safe to use `article` for most documents.

## Preamble

This is where any extra configuration is placed typically this can be loading 
extra functionality with additional packages, or defining new macros for 
your document. 

Shown below is an example of including the `amsmath` package for extra maths
typesetting options, and defining a new command called `\foo` which will
output `bar` in our final output.

```latex
\usepackage{amsmath}
\newcommand{\foo}{bar}
```

## Document Contents

This is where the body of the document lives, the whole document
is enclosed between the opening `\begin{document}` and the closing
`\end{document}`.
