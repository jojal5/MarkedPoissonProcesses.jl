@testset "mean(tpd::Truncated{Weibull{Float64}, Continuous, Float64})" begin
    
    tpd = truncated(Weibull(2.0,3.0), 1, Inf)
    
    x = rand(tpd, 100000)
    
    @test mean(tpd) ≈ mean(x) atol = .01

end

@testset "weibullfit()" begin
    
    pd = Weibull(2,3)
    y = rand(pd, 1000)

    fd = weibullfit(y)

    @test params(fd)[1] ≈ 2.0 rtol=.1
    @test params(fd)[2] ≈ 3.0 rtol=.1

end