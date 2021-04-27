<div style="text-align: center">

<pre style="color: #00ff00; background-color: black; font-size: 8px; width: 80%; margin-left: auto; margin-right: auto;" >
        
                                                                                                                                                    /\\\          
                                                                                                                                                    \/\\\         
                                                                          /\\\                                                                      \/\\\         
    /\\\\\\\\  /\\\\\\\\\\  /\\\\\\\\\\                  /\\\\\  /\\\\\   \///   /\\/\\\\\\                     /\\\\\\\\    /\\\\\  /\\\\\          \/\\\        
    /\\\//////  \/\\\//////  \/\\\//////                 /\\\///\\\\\///\\\  /\\\ \/\\\////\\\                  /\\\//////   /\\\///\\\\\///\\\   /\\\\\\\\\      
    /\\\         \/\\\\\\\\\\ \/\\\\\\\\\\  /\\\\\\\\\\  \/\\\ \//\\\  \/\\\ \/\\\ \/\\\  \//\\\  /\\\\\\\\\\\  /\\\         \/\\\ \//\\\  \/\\\  /\\\////\\\     
    \//\\\        \////////\\\ \////////\\\ \//////////   \/\\\  \/\\\  \/\\\ \/\\\ \/\\\   \/\\\ \///////////  \//\\\        \/\\\  \/\\\  \/\\\ \/\\\  \/\\\    
      \///\\\\\\\\  /\\\\\\\\\\  /\\\\\\\\\\               \/\\\  \/\\\  \/\\\ \/\\\ \/\\\   \/\\\                \///\\\\\\\\ \/\\\  \/\\\  \/\\\ \//\\\\\\\/\\  
        \////////  \//////////  \//////////                \///   \///   \///  \///  \///    \///                   \////////  \///   \///   \///   \///////\//   
        
</pre>


# css-min-cmd
CLI - Minify css files and folders recursively

</div>


## Description

### css-min-cmd helps you to minify your css files either individually or in groups, in which we can convert a single specific file or the content of a specific folder and all subfolders

<br />

## Install
```
npm install css-min-cmd

OR

npm install -D css-min-cmd
```

### Basic usage:

```
css-min-cmd <options> <option source> [source] <option output> [output]
```

## Options
<br />

### Help
```
css-min-cmd --h
```
## Note
If the output directory is not specified, takes the path of the source directory as reference

```
Usage: css-min-cmd <options> <option source> [source] <option output> [output]

Options:
  -v, --version                 show version info                                                     [boolean]
  -l, --log                     show the log, in process directory mode                               [boolean]
  -f, --file                    specify a css source file                                             [string]
      --of, --out-file          specify a minified css output directory                               [string]
  -d, --dir                     specify a css source directory                                        [string]
      --od, --out-dir           specify a minified css output folder directory                        [string]
      --sd, --single-directory  specifies that minify only the files in the destination folder        [boolean]
  -h, --help                    show help info                                                        [boolean]
```


### Single file
```
css-min-cmd --file ./style.css --out-file ./style.min.css

css-min-cmd --f ./style.css --of ./style.min.css

css-min-cmd --f style.css --of style.min.css
```

### Folders recursively
```
css-min-cmd --log --dir ./src/css/ --out-dir ./dist/css/

css-min-cmd --l --d ./src/css/ --od ./dist/css/

css-min-cmd --d src/css/ --od dist/css/
```

### Folder
```
css-min-cmd --single-directory --log --dir ./src/css/ --out-dir ./dist/css/

css-min-cmd --sd --l --d ./src/css/ --od ./dist/css/

css-min-cmd --sd --d src/css/ --od dist/css/
```

### Version
```
css-min-cmd -v
```