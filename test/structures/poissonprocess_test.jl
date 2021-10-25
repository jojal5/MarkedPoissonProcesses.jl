@testset "Poisson Process constructor" begin
    
    pp = PoissonProcess(1.0)
    @test pp.rate ≈ 1.0
    
    pp = PoissonProcess(1)
    @test typeof(pp.rate) == Float64

end

@testset "compose(Vector{PoissonProcess})" begin
   
    pps = PoissonProcess.([1.0, 2.0])
    pp = compose(pps)
    
    @test pp.rate ≈ 3.0
    
end

@testset "mean(PoissonProcess)" begin
   
    pp = PoissonProcess(2.0)
    @test mean(pp) ≈ 1.0/2
    
end

@testset "nevents(PoissonProcess,t)" begin
   
    pp = PoissonProcess(2.0)
    n = nevents(pp, 2.0)
    
    @test n ≈ 4.0
    
end

@testset "prob(pp::PoissonProcess, t::Real)" begin
   
    pp = PoissonProcess(2.0)
    
    @test prob(pp, 1) ≈ cdf(Exponential(1.0/2), 1)
    
end

@testset "quantile(pp::PoissonProcess, p::Real)" begin
   
    pp = PoissonProcess(2.0)
    
    @test quantile(pp, .95) ≈ quantile(Exponential(1.0/2), .95)
    
end

@testset "rand(PoissonProcess)" begin
   
    pp = PoissonProcess(2.0)
    @test length(rand(pp)) == 1
    @test length(rand(pp,10)) == 10
    
    t = rand(pp, 10000)
    @test mean(t) ≈ 1.0/2 atol=.02
    
end

@testset "rate(PoissonProcess)" begin
   
    pp = PoissonProcess(2.0)

    @test rate(pp) ≈ 2.0
    
end

@testset "thin(PoissonProcess, α)" begin
   
    pp = PoissonProcess(2.0)
    
    ppt = thin(pp,.25)
    
    @test ppt.rate ≈ .5

end