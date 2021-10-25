"""
    mean(tpd::Truncated{Weibull{Float64}, Continuous, Float64})

Compute the mean of the truncated Weibull distribution by numerical integration.
"""
function mean(tpd::Truncated{Weibull{Float64}, Continuous, Float64})
   
    m = quadgk( x->1-cdf(tpd,x), 0, Inf)
    
    return m[1]
        
end


"""
    weibullfit(y::AbstractArray{<:Real})

Compute the maximum likelihood estimates of the Weibull distribution parameters with maximum likelihood
"""
function weibullfit(y::AbstractArray{<:Real})

    fobj(θ) = all(θ .> 0) ? -loglikelihood(Weibull(θ...),y) : Inf    

    res = optimize(fobj, [1.0, 1.0])
    θ̂ = Optim.minimizer(res)

    return Weibull(θ̂...)

end