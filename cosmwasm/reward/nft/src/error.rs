use cosmwasm_std::StdError;
use hakedis::state::Repo;

#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error("only hakedis")]
    OnlyHakedis,
    #[error("repo {}/{} not allowed", .0.org, .0.repo)]
    InvalidRepo(Repo),
    #[error("invalid config")]
    InvalidConfig(StdError),
}
