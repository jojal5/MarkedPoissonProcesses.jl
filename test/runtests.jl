using MarkedPoissonProcesses, Test

using Distributions, Statistics

@testset "MarkedPoissonProcesses.jl" begin
    include("structures_test.jl")
    include("utils_test.jl")
end
