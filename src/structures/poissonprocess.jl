struct PoissonProcess
    rate::Real
    PoissonProcess(rate) = rate < 0 ? error("rate must be positive") : new(rate)
end

PoissonProcess(rate::Integer) = PoissonProcess(float(rate))


"""
    compose(pps::Vector{PoissonProcess})

Construct the composed Poisson Process from the sub-processes `pps`.
"""
function compose(pps::Vector{PoissonProcess})
   
    λ = sum(rate.(pps))
    
    return PoissonProcess(λ)
    
end

"""
    mean(pp::PoissonProcess)

Compute the expected waiting time before the next event of the Poisson Process `pp`.
"""
function mean(pp::PoissonProcess)
   
    return 1/pp.rate
    
end


"""
    nevents(pp::PoissonProcess, t::Real)

Compute the expected number of events in the interval (0,t) of the Poisson Process `pp`.
"""
function nevents(pp::PoissonProcess, t::Real)
    
    @assert t>0
    
    return pp.rate*t
    
end

"""
    prob(pp::PoissonProcess, t::Real)

Compute the probability that the next event will occur before `t`.
"""
function prob(pp::PoissonProcess, t::Real)
   
    pd = Exponential(1/pp.rate)
    
    p = cdf(pd, t)
    
    return p
    
end


"""
    quantile(pp::PoissonProcess, p::Real)

Computation of the time ``s`` for which the probability of the next event occurring in the interval ``(0, s)`` is `p`.
"""
function quantile(pp::PoissonProcess, p::Real)
   
    pd = Exponential(1/pp.rate)
    
    q = quantile(pd, p)
    
    return q
    
end

"""
    rand(pp::PoissonProcess, n::Int=1)

Generate `n` waiting time realizations from the process `pp`.
"""
function rand(pp::PoissonProcess, n::Int=1)

    pd = Exponential(1/pp.rate)
    
    return rand(pd, n)
    
end

"""
    rate(pp::PoissonProcess)

Return the rate of the Poisson Process `pp`.
"""
function rate(pp::PoissonProcess)
    
    return pp.rate
    
end


"""
    thin(pp::PoissonProcess, α::Real)

Compute the Poisson process `pp` thinned with the factor `(0 < α < 1)`.
"""
function thin(pp::PoissonProcess, α::Real)
    
    @assert 0<α<1 "the thinning factor should be in (0,1)."
    
    return PoissonProcess(pp.rate * α)
    
end