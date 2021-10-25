@testset "Marked Poisson Process constructor" begin
    
    pp = PoissonProcess(1.0)
    mpp = MarkedPoissonProcess(pp, Weibull(1,2))
    
    @test rate(mpp.ground) ≈ 1.0
    @test mpp.mark == Weibull(1,2)
    
    mpp = MarkedPoissonProcess(1.0, Weibull(1,2))
    @test rate(mpp.ground) ≈ 1.0

end

@testset "condprocess(MarkedPoissonProcess; threshold)" begin
    
    mpp = MarkedPoissonProcess(2.0, Weibull(2,3))

    m = median(Weibull(2,3))
    
    res = condprocess(mpp; threshold=m)
    
    @test rate(res.ground) ≈ 1.0
    @test res.mark == truncated(Weibull(2,3), m, Inf)

end

@testset "mean(MarkedPoissonProcess)" begin
    
    mpp = MarkedPoissonProcess(2.0, Weibull(2,3))
    res = ground(mpp)
    
    @test typeof(res) == PoissonProcess
    @test rate(res) ≈ 2.0

end

@testset "mean(MarkedPoissonProcess)" begin
    
    mpp = MarkedPoissonProcess(2.0, Weibull(2,3))
    res = mean(mpp)
    
    @test res[1] ≈ 1.0/2
    @test res[2] ≈ mean(Weibull(2,3))

end

@testset "rand(MarkedPoissonProcess)" begin
    
    mpp = MarkedPoissonProcess(2.0, Weibull(2,3))
    res = rand(mpp)
    @test length(res[1]) == 1
    @test length(res[2]) == 1
    
    res = rand(mpp,2)
    @test length(res[1]) == 2
    @test length(res[2]) == 2
    
    res = rand(mpp, 100000)
    @test mean(res[1]) ≈ 1.0/2 atol=.02
    @test mean(res[2]) ≈ mean(Weibull(2,3)) atol=.02

end

@testset "rate(MarkedPoissonProcess)" begin
    
    mpp = MarkedPoissonProcess(2.0, Weibull(2,3))
    
    @test rate(mpp) ≈ 2.0

end