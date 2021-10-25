struct MarkedPoissonProcess
    ground::PoissonProcess
    mark::UnivariateDistribution
end

MarkedPoissonProcess(rate::Real, pd::UnivariateDistribution) = 
    MarkedPoissonProcess(PoissonProcess(rate), pd)

"""
    condprocess(mpp::MarkedPoissonProcess; threshold::Real)

Compute the marked Poisson Process conditional that the mark is larger than "threshold".
"""
function condprocess(mpp::MarkedPoissonProcess; threshold::Real)
   
    # Thinning factor of the ground process
    α = ccdf(mpp.mark, threshold)
    
    λ = α*rate(mpp)
    
    # Conditional mark distribution
    cond_mark = truncated(mpp.mark, threshold, Inf)
    
    return MarkedPoissonProcess(λ, cond_mark)
    
end

"""
    ground(mpp::MarkedPoissonProcess)

Return the ground process.
"""
function ground(mpp::MarkedPoissonProcess)
   
    return mpp.ground
    
end

"""
    mean(mpp::MarkedPoissonProcess)

Compute the expected waiting time before the next event and the expected mark of the Marked Poisson Process `mpp`.
"""
function mean(mpp::MarkedPoissonProcess)
   
    t̄ = mean(mpp.ground)
    
    ȳ = mean(mpp.mark)
    
    return (t̄, ȳ)
    
end

"""
    nevents(mpp::MarkedPoissonProcess, t::Real)

Compute the expected number of events in the interval (0,t) of the Marked Poisson Process `mpp`.
"""
function nevents(mpp::MarkedPoissonProcess, t::Real)
    
    return nvents(mpp.ground, t)
    
end

"""
    rand(mpp::MarkedPoissonProcess, n::Int=1)

Generate a couple of waiting time and mark realizations from the process `mpp`.
"""
function rand(mpp::MarkedPoissonProcess, n::Int=1)

    s = rand(mpp.ground, n)
    
    y = rand(mpp.mark, n)
    
    return (s,y)
    
end

"""
    rate(mpp::MarkedPoissonProcess)

Return the ground rate of the Marked Poisson Process `mpp`.
"""
function rate(mpp::MarkedPoissonProcess)
    
    return rate(mpp.ground)
    
end
