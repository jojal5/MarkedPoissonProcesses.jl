@testset "structures.jl" begin
    include(joinpath("structures", "markedpoissonprocess_test.jl"))
    include(joinpath("structures", "poissonprocess_test.jl"))
end