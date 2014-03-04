(function () {
    'use strict';

    BasketballTournament.DataBuilders.TournamentRoundDataBuilder = {

        round1: {
            round: 1,
            numberOfGames: 4,
            game1: {
                team1: {region_seeding: 16, team_name: "North Carolina A&T", record: "(19-16)", score: 73, winner: true},
                team2: {region_seeding: 16, team_name: "Liberty", record: "(15-20)", score: 72, winner: false}
            },
            game2: {
                team1: {region_seeding: 11, team_name: "Middle Tennessee", record: "(28-5)", score: 54, winner: false},
                team2: {region_seeding: 11, team_name: "St. Mary's", record: "(27-6)", score: 67, winner: true}
            },
            game3: {
                team1: {region_seeding: 16, team_name: "LIU Brooklyn", record: "(20-13)", score: 55, winner: false},
                team2: {region_seeding: 16, team_name: "James Madison", record: "(20-14)", score: 68, winner: true}
            },
            game4: {
                team1: {region_seeding: 13, team_name: "Boise State", record: "(21-10)", score: 71, winner: false},
                team2: {region_seeding: 13, team_name: "La Salle", record: "(21-9)", score: 80, winner: true}
            }
        }, // END - round 1

        round2: {
            round: 2,
            numberOfGames: 8,
            regions: {
                midwest: {
                    game1: {
                        team1: {region_seeding: 1, team_name: "Louisville", record: "(29-5)", score: 79, winner: true},
                        team2: {region_seeding: 16, team_name: "NC A&T", record: "(19-16)", score: 48, winner: false}
                    },
                    game2: {
                        team1: {region_seeding: 8, team_name: "Colorado State", record: "(25-8)", score: 84, winner: true},
                        team2: {region_seeding: 9, team_name: "Missouri", record: "(23-10)", score: 72, winner: false}
                    },
                    game3: {
                        team1: {region_seeding: 5, team_name: "Oklahoma State", record: "(24-8)", score: 55, winner: false},
                        team2: {region_seeding: 12, team_name: "Oregon", record: "(26-8)", score: 68, winner: true}
                    },
                    game4: {
                        team1: {region_seeding: 4, team_name: "Saint Louis", record: "(27-6)", score: 64, winner: true},
                        team2: {region_seeding: 13, team_name: "New Mexico State", record: "(24-10)", score: 44, winner: false}
                    },
                    game5: {
                        team1: {region_seeding: 6, team_name: "Memphis", record: "(30-4)", score: 54, winner: true},
                        team2: {region_seeding: 11, team_name: "Mid Tenn", record: "(28-5)", score: 52, winner: false}
                    },
                    game6: {
                        team1: {region_seeding: 3, team_name: "Michigan State", record: "(25-8)", score: 65, winner: true},
                        team2: {region_seeding: 14, team_name: "Valparaiso", record: "(26-7)", score: 54, winner: false}
                    },
                    game7: {
                        team1: {region_seeding: 7, team_name: "Creighton", record: "(27-7)", score: 67, winner: true},
                        team2: {region_seeding: 10, team_name: "Cincinnati", record: "(22-11)", score: 63, winner: false}
                    },
                    game8: {
                        team1: {region_seeding: 2, team_name: "Duke", record: "(27-5)", score: 73, winner: true},
                        team2: {region_seeding: 15, team_name: "Albany", record: "(24-10)", score: 61, winner: false}
                    }
                },
                west: {
                    game1: {
                        team1: {region_seeding: 1, team_name: "Gonzaga", record: "(31-2)", score: 64, winner: true},
                        team2: {region_seeding: 16, team_name: "Southern", record: "(23-9)", score: 58, winner: false}
                    },
                    game2: {
                        team1: {region_seeding: 8, team_name: "Pittsburgh", record: "(24-8)", score: 55, winner: false},
                        team2: {region_seeding: 9, team_name: "Wichita State", record: "(26-8)", score: 73, winner: true}
                    },
                    game3: {
                        team1: {region_seeding: 5, team_name: "Wisconsin", record: "(23-11)", score: 46, winner: false},
                        team2: {region_seeding: 12, team_name: "Ole Miss", record: "(26-8)", score: 57, winner: true}
                    },
                    game4: {
                        team1: {region_seeding: 4, team_name: "Kansas State", record: "(27-7)", score: 61, winner: false},
                        team2: {region_seeding: 13, team_name: "La Salle", record: "(21-9)", score: 63, winner: true}
                    },
                    game5: {
                        team1: {region_seeding: 6, team_name: "Arizona", record: "(25-7)", score: 81, winner: true},
                        team2: {region_seeding: 11, team_name: "Belmont", record: "(26-6)", score: 64, winner: false}
                    },
                    game6: {
                        team1: {region_seeding: 3, team_name: "New Mexico", record: "(29-5)", score: 62, winner: false},
                        team2: {region_seeding: 14, team_name: "Harvard", record: "(19-9)", score: 68, winner: true}
                    },
                    game7: {
                        team1: {region_seeding: 7, team_name: "Notre Dame", record: "(25-9)", score: 58, winner: false},
                        team2: {region_seeding: 10, team_name: "Iowa State", record: "(22-11)", score: 76, winner: true}
                    },
                    game8: {
                        team1: {region_seeding: 2, team_name: "Ohio State", record: "(26-7)", score: 95, winner: true},
                        team2: {region_seeding: 15, team_name: "Iona", record: "(20-13)", score: 70, winner: false}
                    }
                },
                south: {
                    game1: {
                        team1: {region_seeding: 1, team_name: "Kansas", record: "(29-5)", score: 64, winner: true},
                        team2: {region_seeding: 16, team_name: "Western Kentucky", record: "(20-15)", score: 57, winner: false}
                    },
                    game2: {
                        team1: {region_seeding: 8, team_name: "North Carolina", record: "(24-10)", score: 78, winner: true},
                        team2: {region_seeding: 9, team_name: "Villanova", record: "(20-13)", score: 71, winner: false}
                    },
                    game3: {
                        team1: {region_seeding: 5, team_name: "Virginia Common.", record: "(26-8)", score: 88, winner: true},
                        team2: {region_seeding: 12, team_name: "Akron", record: "(26-6)", score: 52, winner: false}
                    },
                    game4: {
                        team1: {region_seeding: 4, team_name: "Michigan", record: "(26-7)", score: 71, winner: true},
                        team2: {region_seeding: 13, team_name: "South Dakota State", record: "(25-9)", score: 56, winner: false}
                    },
                    game5: {
                        team1: {region_seeding: 6, team_name: "UCLA", record: "(25-9)", score: 63, winner: false},
                        team2: {region_seeding: 11, team_name: "Minnesota", record: "(20-12)", score: 83, winner: true}
                    },
                    game6: {
                        team1: {region_seeding: 3, team_name: "Florida", record: "(26-7)", score: 79, winner: true},
                        team2: {region_seeding: 14, team_name: "Northwestern State", record: "(23-8)", score: 47, winner: false}
                    },
                    game7: {
                        team1: {region_seeding: 7, team_name: "San Diego State", record: "(22-10)", score: 70, winner: true},
                        team2: {region_seeding: 10, team_name: "Oklahoma", record: "(20-11)", score: 55, winner: false}
                    },
                    game8: {
                        team1: {region_seeding: 2, team_name: "Georgetown", record: "(25-6)", score: 68, winner: false},
                        team2: {region_seeding: 15, team_name: "Florida Gulf Coast", record: "(24-10)", score: 78, winner: true}
                    }
                },
                east: {
                    game1: {
                        team1: {region_seeding: 1, team_name: "Indiana", record: "(27-6)", score: 83, winner: true},
                        team2: {region_seeding: 16, team_name: "James Madison", record: "(20-14)", score: 62, winner: false}
                    },
                    game2: {
                        team1: {region_seeding: 8, team_name: "NC State", record: "(24-10)", score: 72, winner: false},
                        team2: {region_seeding: 9, team_name: "Temple", record: "(23-9)", score: 76, winner: true}
                    },
                    game3: {
                        team1: {region_seeding: 5, team_name: "UNLV", record: "(25-9)", score: 61, winner: false},
                        team2: {region_seeding: 12, team_name: "California", record: "(20-11)", score: 64, winner: true}
                    },
                    game4: {
                        team1: {region_seeding: 4, team_name: "Syracuse", record: "(26-9)", score: 81, winner: true},
                        team2: {region_seeding: 13, team_name: "Montana", record: "(25-6)", score: 34, winner: false}
                    },
                    game5: {
                        team1: {region_seeding: 6, team_name: "Butler", record: "(26-8)", score: 68, winner: true},
                        team2: {region_seeding: 11, team_name: "Bucknell", record: "(28-5)", score: 56, winner: false}
                    },
                    game6: {
                        team1: {region_seeding: 3, team_name: "Marquette", record: "(23-8)", score: 59, winner: true},
                        team2: {region_seeding: 14, team_name: "Davidson", record: "(26-7)", score: 58, winner: false}
                    },
                    game7: {
                        team1: {region_seeding: 7, team_name: "Illinois", record: "(22-12)", score: 57, winner: true},
                        team2: {region_seeding: 10, team_name: "Colorado", record: "(21-11)", score: 49, winner: false}
                    },
                    game8: {
                        team1: {region_seeding: 2, team_name: "Miami (FL)", record: "(27-6)", score: 78, winner: true},
                        team2: {region_seeding: 15, team_name: "Pacific", record: "(22-12)", score: 49, winner: false}
                    }
                }
            }
        }, // END - round 2

        round3: {
            round: 3,
            numberOfGames: 4,
            regions: {
                midwest: {
                    game1: {
                        team1: {region_seeding: 1, team_name: "Louisville", record: "(29-5)", score: 82, winner: true},
                        team2: {region_seeding: 8, team_name: "Colorado State", record: "(25-8)", score: 56, winner: false}
                    },
                    game2: {
                        team1: {region_seeding: 12, team_name: "Oregon", record: "(26-8)", score: 74, winner: true},
                        team2: {region_seeding: 4, team_name: "Saint Louis", record: "(27-6)", score: 57, winner: false}
                    },
                    game3: {
                        team1: {region_seeding: 6, team_name: "Memphis", record: "(30-4)", score: 48, winner: false},
                        team2: {region_seeding: 3, team_name: "Michigan State", record: "(25-8)", score: 70, winner: true}
                    },
                    game4: {
                        team1: {region_seeding: 7, team_name: "Creighton", record: "(27-7)", score: 50, winner: false},
                        team2: {region_seeding: 2, team_name: "Duke", record: "(27-5)", score: 66, winner: true}
                    }
                },
                west: {
                    game1: {
                        team1: {region_seeding: 1, team_name: "Gonzaga", record: "(31-2)", score: 70, winner: false},
                        team2: {region_seeding: 9, team_name: "Wichita State", record: "(26-8)", score: 76, winner: true}
                    },
                    game2: {
                        team1: {region_seeding: 12, team_name: "Ole Miss", record: "(26-8)", score: 74, winner: false},
                        team2: {region_seeding: 13, team_name: "La Salle", record: "(21-9)", score: 76, winner: true}
                    },
                    game3: {
                        team1: {region_seeding: 6, team_name: "Arizona", record: "(25-7)", score: 74, winner: true},
                        team2: {region_seeding: 14, team_name: "Harvard", record: "(19-9)", score: 51, winner: false}
                    },
                    game4: {
                        team1: {region_seeding: 10, team_name: "Iowa State", record: "(22-11)", score: 75, winner: false},
                        team2: {region_seeding: 2, team_name: "Ohio State", record: "(26-7)", score: 78, winner: true}
                    }
                },
                south: {
                    game1: {
                        team1: {region_seeding: 1, team_name: "Kansas", record: "(29-5)", score: 70, winner: true},
                        team2: {region_seeding: 8, team_name: "North Carolina", record: "(24-10)", score: 58, winner: false}
                    },
                    game2: {
                        team1: {region_seeding: 5, team_name: "Virginia Commonwealth", record: "(26-8)", score: 53, winner: false},
                        team2: {region_seeding: 4, team_name: "Michigan", record: "(26-7)", score: 78, winner: true}
                    },
                    game3: {
                        team1: {region_seeding: 11, team_name: "Minnesota", record: "(20-12)", score: 64, winner: false},
                        team2: {region_seeding: 3, team_name: "Florida", record: "(26-7)", score: 78, winner: true}
                    },
                    game4: {
                        team1: {region_seeding: 7, team_name: "San Diego State", record: "(22-10)", score: 71, winner: false},
                        team2: {region_seeding: 15, team_name: "Florida Gulf Coast", record: "(24-10)", score: 81, winner: true}
                    }
                },
                east: {
                    game1: {
                        team1: {region_seeding: 1, team_name: "Indiana", record: "(27-6)", score: 58, winner: true},
                        team2: {region_seeding: 9, team_name: "Temple", record: "(23-9)", score: 52, winner: false}
                    },
                    game2: {
                        team1: {region_seeding: 12, team_name: "California", record: "(20-11)", score: 60, winner: false},
                        team2: {region_seeding: 4, team_name: "Syracuse", record: "(26-9)", score: 66, winner: true}
                    },
                    game3: {
                        team1: {region_seeding: 6, team_name: "Butler", record: "(26-8)", score: 72, winner: false},
                        team2: {region_seeding: 3, team_name: "Marquette", record: "(23-8)", score: 74, winner: true}
                    },
                    game4: {
                        team1: {region_seeding: 7, team_name: "Illinois", record: "(22-12)", score: 59, winner: false},
                        team2: {region_seeding: 2, team_name: "Miami (FL)", record: "(27-6)", score: 63, winner: true}
                    }
                }
            }
        }, // END - round 3

        round4: {
            round: 4,
            numberOfGames: 2,
            regions: {
                midwest: {
                    game1: {
                        team1: {region_seeding: 1, team_name: "Louisville", record: "(29-5)", score: 77, winner: true},
                        team2: {region_seeding: 12, team_name: "Oregon", record: "(26-8)", score: 69, winner: false}
                    },
                    game2: {
                        team1: {region_seeding: 3, team_name: "Michigan State", record: "(25-8)", score: 61, winner: false},
                        team2: {region_seeding: 2, team_name: "Duke", record: "(27-5)", score: 71, winner: true}
                    }
                },
                west: {
                    game1: {
                        team1: {region_seeding: 9, team_name: "Wichita State", record: "(26-8)", score: 72, winner: true},
                        team2: {region_seeding: 13, team_name: "La Salle", record: "(21-9)", score: 58, winner: false}
                    },
                    game2: {
                        team1: {region_seeding: 6, team_name: "Arizona", record: "(25-7)", score: 70, winner: false},
                        team2: {region_seeding: 2, team_name: "Ohio State", record: "(26-7)", score: 73, winner: true}
                    }
                },
                south: {
                    game1: {
                        team1: {region_seeding: 1, team_name: "Kansas", record: "(29-5)", score: 85, winner: false},
                        team2: {region_seeding: 4, team_name: "Michigan", record: "(26-7)", score: 87, winner: true}
                    },
                    game2: {
                        team1: {region_seeding: 3, team_name: "Florida", record: "(26-7)", score: 62, winner: true},
                        team2: {region_seeding: 15, team_name: "Florida Gulf Coast", record: "(24-10)", score: 50, winner: false}
                    }
                },
                east: {
                    game1: {
                        team1: {region_seeding: 1, team_name: "Indiana", record: "(27-6)", score: 50, winner: false},
                        team2: {region_seeding: 4, team_name: "Syracuse", record: "(26-9)", score: 61, winner: true}
                    },
                    game2: {
                        team1: {region_seeding: 3, team_name: "Marquette", record: "(23-8)", score: 71, winner: true},
                        team2: {region_seeding: 2, team_name: "Miami (FL)", record: "(27-6)", score: 61, winner: false}
                    }
                }
            }
        }, // END - round 4

        round5: {
            round: 5,
            numberOfGames: 1,
            regions: {
                midwest: {
                    game1: {
                        team1: {region_seeding: 1, team_name: "Louisville", record: "(29-5)", score: 85, winner: true},
                        team2: {region_seeding: 2, team_name: "Duke", record: "(27-5)", score: 63, winner: false}
                    }
                },
                west: {
                    game1: {
                        team1: {region_seeding: 9, team_name: "Wichita State", record: "(26-8)", score: 70, winner: true},
                        team2: {region_seeding: 2, team_name: "Ohio State", record: "(26-7)", score: 66, winner: false}
                    }
                },
                south: {
                    game1: {
                        team1: {region_seeding: 4, team_name: "Michigan", record: "(26-7)", score: 79, winner: true},
                        team2: {region_seeding: 3, team_name: "Florida", record: "(26-7)", score: 59, winner: false}
                    }
                },
                east: {
                    game1: {
                        team1: {region_seeding: 4, team_name: "Syracuse", record: "(26-9)", score: 55, winner: true},
                        team2: {region_seeding: 3, team_name: "Marquette", record: "(23-8)", score: 39, winner: false}
                    }
                }
            }
        },  // END - round 5

        round6: {
            round: 6,
            numberOfGames: 2,
            game1: {
                        team1: {region_seeding: 1, team_name: "Louisville", record: "(29-5)", score: 72, winner: true, region: "Midwest"},
                        team2: {region_seeding: 9, team_name: "Wichita State", record: "(26-8)", score: 68, winner: false, region: "West"}
                },
            game2: {
                        team1: {region_seeding: 4, team_name: "Michigan", record: "(26-7)", score: 61, winner: true, region: "South"},
                        team2: {region_seeding: 4, team_name: "Syracuse", record: "(26-9)", score: 56, winner: false, region: "East"}
            }
        },  // END - round 6

        round7: {
            round: 7,
            numberOfGames: 1,
            game1: {
                        team1: {region_seeding: 1, team_name: "Louisville", record: "(29-5)", score: 82, winner: true, region: "Midwest"},
                        team2: {region_seeding: 4, team_name: "Michigan", record: "(26-7)", score: 76, winner: false, region: "South"}
            }
        }  // END - round 6
    };

})();
