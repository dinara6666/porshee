import React, { useState } from "react";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import "./CarSearch.css";

const CarSearch = () => {
    const [type, setType] = useState("new");
    const [drive, setDrive] = useState("");

    return (
        <div className="search-container">
            <div className="search-header">
                <Button startIcon={<LocationOn />} className="location-btn">Регион поиска</Button>
                <Button className="reset-btn">Сбросить ✖</Button>
                <Button className="collapse-btn">Свернуть ⬆</Button>
            </div>

            <div className="filters">
                <FormControl className="form-control">
                    <InputLabel>Марка</InputLabel>
                    <Select>
                        <MenuItem value="lada">Lada</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className="form-control">
                    <InputLabel>Модель</InputLabel>
                    <Select>
                        <MenuItem value="vesta">Vesta Sport</MenuItem>
                    </Select>
                </FormControl>

                <ToggleButtonGroup
                    value={type}
                    exclusive
                    onChange={(e, newType) => setType(newType)}
                    className="toggle-group"
                >
                    <ToggleButton value="new">Новый</ToggleButton>
                    <ToggleButton value="used">Б/У</ToggleButton>
                </ToggleButtonGroup>

                <TextField label="Пробег (км)" type="number" defaultValue={70000} className="small-input" />

                <FormControl className="form-control small">
                    <InputLabel>Объем двигателя, л</InputLabel>
                    <Select>
                        <MenuItem value="2.0">2.0</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className="form-control small">
                    <InputLabel>Трансмиссия</InputLabel>
                    <Select>
                        <MenuItem value="auto">Автомат</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className="form-control small">
                    <InputLabel>Мощность двигателя (л.с.)</InputLabel>
                    <Select>
                        <MenuItem value="от">От</MenuItem>
                        <MenuItem value="до">До</MenuItem>
                    </Select>
                </FormControl>

                <ToggleButtonGroup
                    value={drive}
                    exclusive
                    onChange={(e, newDrive) => setDrive(newDrive)}
                    className="toggle-group"
                >
                    <ToggleButton value="front">Передний</ToggleButton>
                    <ToggleButton value="rear">Задний</ToggleButton>
                    <ToggleButton value="all">Полный</ToggleButton>
                </ToggleButtonGroup>
            </div>

            <Button variant="contained" className="search-btn">Показать 5 404 предложения</Button>
        </div>
    );
};

export default CarSearch;
