using MarkedPoissonProcesses
using Documenter

DocMeta.setdocmeta!(MarkedPoissonProcesses, :DocTestSetup, :(using MarkedPoissonProcesses); recursive=true)

makedocs(;
    modules=[MarkedPoissonProcesses],
    authors="Jonathan Jalbert",
    repo="https://github.com/jojal5/MarkedPoissonProcesses.jl/blob/{commit}{path}#{line}",
    sitename="MarkedPoissonProcesses.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://jojal5.github.io/MarkedPoissonProcesses.jl",
        assets=String[],
    ),
    pages = ["index.md",
    "Tutorial" =>["Getting started" => "tutorial/index.md",
        "Poisson Process" => "tutorial/poissonprocess.md",
        "Marked Poisson Process" => "tutorial/markedpoissonprocess.md" ],
    "contributing.md",
    "functions.md"
    ],
)

deploydocs(;
    repo="github.com/jojal5/MarkedPoissonProcesses.jl",
    devbranch = "master",
    devurl = "dev",
    versions = ["stable" => "v^", "v#.#", devurl => devurl]
)
