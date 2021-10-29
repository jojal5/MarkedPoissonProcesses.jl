module MarkedPoissonProcesses

using Distributions, Optim, QuadGK, Statistics
import Base.rand, Distributions.mean, Distributions.quantile, Distributions.rate, Statistics.mean

include("utils.jl")
include("structures.jl")

export PoissonProcess, MarkedPoissonProcess, 
    compose, condprocess, ground, mean, nevents, 
    prob, quantile, rand, rate, thin, weibullfit

end # module
