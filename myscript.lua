print('Starting up')

local userInputService = game:GetService("UserInputService")
local player = game:GetService("Players").LocalPlayer
local humanoid = player.Character.Humanoid
local pathfindingComplete = false
local targetCFrame = nil
-- Function to perform A* pathfinding
local function PathfindTo(target)
    local path = game:GetService("PathfindingService"):FindPathAsync(
        humanoid.RootPart.Position,
        target.Position
    )

    if path.Status == Enum.PathStatus.Success then
        local waypoints = path:GetWaypoints()
        local currentIndex = 1

        -- Enable flag to indicate pathfinding is in progress
        pathfindingComplete = false

        while currentIndex <= #waypoints do
            local waypoint = waypoints[currentIndex]

            if waypoint.Action == Enum.PathWaypointAction.Jump then
                humanoid.Jump = true
		humanoid:MoveTo(waypoint.Position)
                currentIndex += 1  -- Move to the next waypoint immediately
            else
                humanoid:MoveTo(waypoint.Position)
                humanoid.MoveToFinished:Wait()

                -- Check if the pathfinding was interrupted
                if pathfindingComplete then
                    break
                end

                currentIndex += 1
            end
        end

        print("Reached target position!")
		return true
    else
        print("Failed to find a path to the target.")
		return true
    end

    -- Check the distance to the target position continuously
    while (humanoid.RootPart.Position - target.Position).Magnitude > 1 do
        if pathfindingComplete then
            break
        end
        wait()
    end

    print("Target position reached!")

    return true  -- Return true to indicate the target was reached
end



-- Separate loop for handling jumps
spawn(function()
    while true do
        if humanoid.MoveToFinished:Wait() then
            if humanoid.MoveToPoint == nil and not pathfindingComplete then
                humanoid.Jump = true
            end
        end
    end
end)

-- Event listener for player input
userInputService.InputBegan:Connect(function(input)
    if input.UserInputType == Enum.UserInputType.Keyboard and not pathfindingComplete then
        humanoid:Move(Vector3.new()) -- Stop the character's movement
        pathfindingComplete = true -- Set the flag to interrupt pathfinding
    end
end)



local function CombineCFrameAndVector(cframe, vector)
    return cframe + vector
end
local function BloxFruit()
	loadstring(game:HttpGet("https://raw.githubusercontent.com/Augustzyzx/UraniumMobile/main/UraniumKak.lua"))()
end
local function heal()
	local Locations = {"Backpack", "Character"}
	local f="Food";
	for i,Location in pairs(Locations) do
		--print(Location)
		for a,b in pairs(game.Players.LocalPlayer[Location]:GetChildren()) do
			if(b.Name==f)then 
				print(f)
				for c,d in pairs(b.Script:GetChildren()) do
					print(d)
					for g,h in pairs(d:GetChildren()) do
						print(h)
					end
				end
			end
		end
	end
end
local function useAllFire(player_)
	local Balls = {"Fireball", "Lightningball"}
	local Locations = {"Backpack", "Character"}
	for i, player in pairs(game.Players:GetChildren()) do
		for _,Ball in pairs(Balls) do
			for i,Location in pairs(Locations) do local CheckBall = player[Location]:FindFirstChild(Ball)
				if(CheckBall) then --print(player.Name.." has: "..Ball)
					for a,b in pairs(CheckBall:GetChildren())do
						--print(b)
					end
					CheckBall.FireballEvent:FireServer(player_.Position);
				end
			end 
			--if earlyreturn then return end
		end
	end
end
local function destroyAll()
	game.ReplicatedStorage.DestroyAll:InvokeServer()
	wait(.7)
end
local prefixs={{Prefix="",Number=1,Term="Ones"},{Prefix="k",Number=1000,Term="Thousand"},{Prefix="M",Number=1000000,Term="Million"},{Prefix="B",Number=1000000000,Term="Billion"},{Prefix="T",Number=1000000000000,Term="Trillion"},{Prefix="qd",Number=1000000000000000,Term="Quadrillion"},{Prefix="Qn",Number=1000000000000000000,Term="Quintilion"},{Prefix="sx",Number=1000000000000000000000,Term="Sextillion"},{Prefix="Sp",Number=1000000000000000000000000,Term="Septillion"},{Prefix="O",Number=1000000000000000000000000000,Term="Octillion"},{Prefix="N",Number=1000000000000000000000000000000,Term="Nonillion"},{Prefix="de",Number=1000000000000000000000000000000000,Term="Decillion"},{Prefix="Ud",Number=1000000000000000000000000000000000000,Term="Undecillion"},{Prefix="DD",Number=1000000000000000000000000000000000000000,Term="Duodecillion"},{Prefix="tdD",Number=1000000000000000000000000000000000000000000,Term="Tredecillion"},{Prefix="qdD",Number=1000000000000000000000000000000000000000000000,Term="Quattuordecillion"},{Prefix="QnD",Number=1000000000000000000000000000000000000000000000000,Term="Quindecillion"},{Prefix="sxD",Number=1000000000000000000000000000000000000000000000000000,Term="Sedecillion"},{Prefix="SpD",Number=1000000000000000000000000000000000000000000000000000000,Term="Septendecillion"},{Prefix="OcD",Number=1000000000000000000000000000000000000000000000000000000000,Term="Octodecillion"},{Prefix="NvD",Number=1000000000000000000000000000000000000000000000000000000000000,Term="Novemdecillion"},{Prefix="Vgn",Number=1000000000000000000000000000000000000000000000000000000000000000,Term="Vigintillion"},{Prefix="UVg",Number=1000000000000000000000000000000000000000000000000000000000000000000,Term="Unvigintillion"},{Prefix="DVg",Number=1000000000000000000000000000000000000000000000000000000000000000000000,Term="Duovigintillion"},{Prefix="TVg",Number=1000000000000000000000000000000000000000000000000000000000000000000000000,Term="Tresvigintillion"},{Prefix="qtV",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quattuorvigintillion"},{Prefix="QnV",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quinvigintillion"},{Prefix="SeV",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Sesvigintillion"},{Prefix="SPG",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Septemvigintillion"},{Prefix="OVG",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Octovigintilion"},{Prefix="NVG",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Novemvigintillion"},{Prefix="TGN",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Trigintillion"},{Prefix="UTG",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Untrigintillion"},{Prefix="DTG",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Duotrigintillion"},{Prefix="tsTG",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Trestrigintillion"},{Prefix="qtTG",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quattuortrigintillion"},{Prefix="QnTG",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quintrigintillion"},{Prefix="ssTG",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Sestrigintillion"},{Prefix="SpTG",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Septentrigintillion"},{Prefix="OcTG",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Octotrigintillion"},{Prefix="NoTG",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Novemtrigintillion"},{Prefix="QdDR",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quadragintillion"},{Prefix="uQDR",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Unquadragintillion"},{Prefix="dQDR",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Duoquadragintillion"},{Prefix="tQDR",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Tresquadragintillion"},{Prefix="qdQDR",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quattuorquadragintillion"},{Prefix="QnQDR",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quinquadragintillion"},{Prefix="sxQDR",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Sesquadragintillion"},{Prefix="SpQDR",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Septenquadragintillion"},{Prefix="OQDDr",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Octoquadragintillion"},{Prefix="NQDDr",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Novemquadragintillion"},{Prefix="qQGNT",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quinquagintillion"},{Prefix="uQGNT",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Unquinquagintillion"},{Prefix="dQGNT",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Duoquinquagintillion"},{Prefix="tQGNT",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Tresquinquagintillion"},{Prefix="qdQGNT",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quattuorquinquagintillion"},{Prefix="QnQGNT",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quinquinquagintillion"},{Prefix="sxQGNT",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Sesquinquagintillion"},{Prefix="SpQGNT",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Septenquinquagintillion"},{Prefix="OQQGNT",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Octoquinquagintillion"},{Prefix="NQQGNT",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Novemquinquagintillion"},{Prefix="SXGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Sexagintillion"},{Prefix="USXGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Unsexagintillion"},{Prefix="DSXGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Duosexagintillion"},{Prefix="TSXGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Tresexagintillion"},{Prefix="QTSXGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quattuorsexagintillion"},{Prefix="QNSXGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quinsexagintillion"},{Prefix="SXSXGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Sesexagintillion"},{Prefix="SPSXGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Septensexagintillion"},{Prefix="OSXGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Octosexagintillion"},{Prefix="NVSXGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Novemsexagintillion"},{Prefix="SPTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Septuagintillion"},{Prefix="USPTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Unseptuagintillion"},{Prefix="DSPTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Duoseptuagintillion"},{Prefix="TSPTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Treseptuagintillion"},{Prefix="QTSPTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quattuorseptuagintillion"},{Prefix="QNSPTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quinseptuagintillion"},{Prefix="SXSPTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Seseptuagintillion"},{Prefix="SPSPTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Septenseptuagintillion"},{Prefix="OSPTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Octoseptuagintillion"},{Prefix="NVSPTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Novemseptuagintillion"},{Prefix="OTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Octogintillion"},{Prefix="UOTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Unoctogintillion"},{Prefix="DOTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Duooctogintillion"},{Prefix="TOTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Treoctogintillion"},{Prefix="QTOTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quattuoroctogintillion"},{Prefix="QNOTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quinoctogintillion"},{Prefix="SXOTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Sexoctogintillion"},{Prefix="SPOTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Septemoctogintillion"},{Prefix="OTOTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Octooctogintillion"},{Prefix="NVOTGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Novemoctogintillion"},{Prefix="NONGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Nonagintillion"},{Prefix="UNONGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Unnonagintillion"},{Prefix="DNONGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Duononagintillion"},{Prefix="TNONGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Trenonagintillion"},{Prefix="QTNONGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quattuornonagintillion"},{Prefix="QNNONGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Quinnonagintillion"},{Prefix="SXNONGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Senonagintillion"},{Prefix="SPNONGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Septenonagintillion"},{Prefix="OTNONGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Octononagintillion"},{Prefix="NONONGNTL",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Novemnonagintillion"},{Prefix="CENT",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Centillion"},{Prefix="UNCENT",Number=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,Term="Uncentillion"}}
local function conv(cash)local p="";for _,prefix in pairs(prefixs) do if(cash:match(prefix.Prefix))then p = _ end end cash=tonumber(string.split(cash,prefixs[p].Prefix)[1])*prefixs[p].Number return cash end
local function comparCash(a)return conv(a)<conv(string.split(game.Players.LocalPlayer.leaderstats.Cash.value,"$")[2])end
local done_=true
local legitCoin=true
local PathfindingService = game:GetService("PathfindingService")
local RunService = game:GetService("RunService")
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local character = player.Character
local humanoid = character:WaitForChild("Humanoid")
local humanoidRoot = character:WaitForChild("HumanoidRootPart") 
local function updated_()
	Players = game:GetService("Players")
	player = Players.LocalPlayer
	character = player.Character
	humanoid = character:WaitForChild("Humanoid")
	humanoidRoot = character:WaitForChild("HumanoidRootPart") 
end

local path = PathfindingService:CreatePath({
	AgentRadius = 3,
	AgentHeight = 6,
	AgentCanJump = true,
	AgentCanClimb = true,
	Costs = {
		Water = 20,
		Neon = math.huge
	}
})

local waypoints
local nextWaypointIndex
local reachedConnection
local blockedConnection
local function followPath(destination)
	done_=false
	-- Compute the path
	local success, errorMessage = pcall(function()
		path:ComputeAsync(character.PrimaryPart.Position, destination)
	end)
	if success and path.Status == Enum.PathStatus.Success then
		-- Get the path waypoints
		waypoints = path:GetWaypoints()
		-- Detect if path becomes blocked
		blockedConnection = path.Blocked:Connect(function(blockedWaypointIndex)
			-- Check if the obstacle is further down the path
			if blockedWaypointIndex >= nextWaypointIndex then
				-- Stop detecting path blockage until path is re-computed
				blockedConnection:Disconnect()
				-- Call function to re-compute new path
				followPath(destination)
			end
		end)
		-- Detect when movement to next waypoint is complete
		if not reachedConnection then
			reachedConnection = humanoid.MoveToFinished:Connect(function(reached)
				if reached and nextWaypointIndex < #waypoints then
					-- Increase waypoint index and move to next waypoint
					nextWaypointIndex = nextWaypointIndex + 1
					humanoid:MoveTo(waypoints[nextWaypointIndex].Position)
				else
					done_=true
					print('D')
					reachedConnection:Disconnect()
					blockedConnection:Disconnect()
				end
			end)
		end
		-- Initially move to second waypoint (first waypoint is path start; skip it)
		nextWaypointIndex = 2
		humanoid:MoveTo(waypoints[nextWaypointIndex].Position)
	else
		warn("Path not computed!", errorMessage)
	end
end
local function Clovers() return game.Workspace.Clovers:GetChildren() end
local function Boxes() return game.Workspace.Boxes:GetChildren() end
local function dist(a,b)return (a.Position-b.Position).Magnitude end
local function waitDoneMove()
	while(not done_) do
		wait(0)
	end
	return true
end
local function getClosest(t)
	local _={}
	print(t)
	for i,v in pairs(t) do
		_[#_+1]=vwwwwwwwwwwww
		print(dist(v,humanoidRoot))
	end
	table.sort(_,function(a,b)
		return dist(a,humanoidRoot) < dist(b,humanoidRoot)
	end)
	return _[1]
end
local function MoveTo(a)
	followPath(a.Position)
	return true;
end


local function tp(coin)
	humanoidRoot.CFrame=coin.CFrame
	wait(.55)
end



local myLeader
local myT
local function myTeam(name)
	if(name==nil)then name =game.Players.LocalPlayer.name end
	local d= nil;for i,v in pairs(game.Workspace.Teams:GetChildren()) do  for i,_ in pairs(v:GetChildren()) do if(_.name=="leader")then myLeader=_.value end if(name==_.value) then myT=v.name;end end return {myLeader,myT}  end
end
local function getTeams()
	local My
	local Teams_={}
	local myTeam=nil;
	for i,v in pairs(game.Workspace.Teams:GetChildren()) do  for i,_ in pairs(v:GetChildren()) do table.insert(Teams_,{_.value,v.name});end end return Teams_ end
local function getPos()
	local InSafe={}
	local SafeZone1={86.3,493.6}
	local SafeZone2={-3.5,388.2}
	local mine=myTeam()
	for _,v in pairs(game:GetService("Players"):GetPlayers()) do
		--print(v)
		local x=v.Character.HumanoidRootPart.Position.X
		local z=v.Character.HumanoidRootPart.Position.Z
		local eTeam=myTeam(v.Character.name)
		--print(v.name)
		--print(x,z,SafeZone1[1]>x,SafeZone1[2]>z,SafeZone2[1]<x,SafeZone2[2]<z)
		--print(mine[1],mine[2],' - ',eTeam[1],eTeam[2])
		pcall(function() if(SafeZone1[1]>x and SafeZone1[2]>z and SafeZone2[1]<x and SafeZone2[2]<z) then
				--if(mine)
				if(mine[2]==nil or v.Character.Humanoid.Health==0) then InSafe[v.name]=true else  if(mine[1]==eTeam[1] or v.Character.Humanoid.Health==0) then InSafe[v.name]=true else InSafe[v.name]=false end end;
			else
				if(v.Character.Humanoid.Health<1) then InSafe[v.name]=true
				else
					InSafe[v.name]=false end
			end end)
	end
	return InSafe
end
local t_=""
local usertarget=false
print('waiting for game to load')
repeat wait() until game:IsLoaded()
print('game laoded')

local function fire(event) return event:FireServer() end
local egg=nil--game:GetService("ReplicatedStorage").EggEvent
local treasure=nil--ame:GetService("ReplicatedStorage").TreasureEvent
--local drop=game:GetService("ReplicatedStorage").disableOwnRide
local cf=game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
local function MHBox()
	local cf=game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
	for i,v in pairs(game.Workspace:GetDescendants()) do
		if v:IsA("BasePart") then
			if  (v.Name:match("Diamond") or v.Name:match("Research") or v.Name:match("Golden") or v.Name:match("Crystal") ) and not v.Name:match("overlay") and not v.Name:match("inside")  and not v.Name:match("Lava") and not v.Name:match("Mine") and not v.Name:match("Handle") and not v.Name:match("Upgrade") and not v.Name:match("Conv") and not v.Name:match("Hitox") and not v.Name:match("Mesh")  and not v.Name:match("Palm") and not v.Name:match("Sphere") and not v.Name:match("Smooth") and not v.Name:match("Grass") and not v.Name:match("Grass") and not v.Name:match("Union") and not v.Name:match("Color") and not v.Name:match("Drop") and not v.Name:match("EGG")  and not v.Name:match("Terrain") and not v.Name:match("Rock") and  not v.Name:match("Sand") and not v:IsA('Terrain') and not v.Name:match("Part") and not v.Name:match("rock") and not v.Name:match("Wedge") and not v.Name:match("Lights") and not v.Name:match("Tree") and not v.Name:match("Leaf") then
				--if v.Name:match("Egg") then 
				print('Yes',v.Name)
				wait(0.05)
				cf=game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
				game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = v.CFrame
				wait(.5)
				game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=cf
			else if (not v.Name:match("overlay") and not v.Name:match("inside")  and not v.Name:match("Lava") and not v.Name:match("Mine") and not v.Name:match("Handle") and not v.Name:match("Upgrade") and not v.Name:match("Conv") and not v.Name:match("Hitox") and not v.Name:match("Mesh")  and not v.Name:match("Palm") and not v.Name:match("Sphere") and not v.Name:match("Smooth") and not v.Name:match("Grass") and not v.Name:match("Grass") and not v.Name:match("Union") and not v.Name:match("Color") and not v.Name:match("Drop") and not v.Name:match("EGG")  and not v.Name:match("Terrain") and not v.Name:match("Rock") and  not v.Name:match("Sand") and not v:IsA('Terrain') and not v.Name:match("Part") and not v.Name:match("rock") and not v.Name:match("Wedge") and not v.Name:match("Lights") and not v.Name:match("Tree") and not v.Name:match("Leaf") )then
					--print('Not',v.Name)
				end
			end
		end
	end
	print('Done!')
end
local DMGbool = false
local FarmBool = false
local bool = false
local CurrentTarget=""
local ctime=0
local ltime=0
local function farm()
	_G.speed=0.005
	--ltime=os.clock()*100
	while _G.toggle==true do 
		local point=nil
		local dist=nil
		humanoidRoot=character:WaitForChild("HumanoidRootPart")
		for _,coin in pairs(game.Workspace.CoinContainer:GetChildren()) do
			local magnitude = math.abs((coin.Coin.Position - humanoidRoot.Position).Magnitude)
			if(dist==nil) then dist=magnitude end
			if(magnitude<dist) then 
				point=coin.Coin
				dist=magnitude
			end
		end
		if(legitCoin) then followPath(point.Position)
		else tp(point) end
	end
end
local function farm_()
	cf=game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
	_G.speed=0.05
	while _G.toggle==true do
		for i,v in pairs(game.Workspace:GetDescendants()) do
			if v:IsA("BasePart") then
				if not v:IsA('Terrain') then
					if v.Name:match("Egg") then 
						-- print(v.Name)
						wait(_G.speed)
						cf=game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
						game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = v.CFrame
						wait(0)
						game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=cf
						--wait(0.001)
					end
					if v.Name:match("Tre") then 
						--print(v.Name)
						wait(_G.speed)
						cf=game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
						game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = v.CFrame
						wait(0)
						game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=cf
						--wait(0.001)
					end
				end
			end
		end
		cf=mil;
	end
end
local function findPlr(name)
	for _,v in pairs(game:GetService("Players"):GetPlayers()) do
		if string.find(v.Name, name) then
			return v
		end
	end
	return nil
end
local damagedplayer = nil
local function damageplayer(player)
	for i,p in pairs(game.Workspace:GetChildren()) do
		if p.Name == player then
			--print("Damaging " .. player)
			game:GetService("ReplicatedStorage").jdskhfsIIIllliiIIIdchgdIiIIIlIlIli:FireServer(p.Humanoid,1) -- the last arguement is not damage don't bother changin it
			--print("Damaged " .. player)
		end
	end end

local function aura()
	_G.speed2=0.05
	while _G.toggle2==true do
		local function death()
			local Zoned=getPos()
			if (usertarget==true) then
				cf=game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
				local player=findPlr(t_)
				if(Zoned[t_]==true) then wait();return end
				--print(player)
				local function atk() 
					local randomOffsetX = math.random(-15,15)
					local randomOffsetY=1
					local randomOffsetX = math.random(-15,15)
					local newPos = player.Character:WaitForChild("HumanoidRootPart").Position + Vector3.new(randomOffsetX ,randomOffsetY,randomOffsetZ)
					game.Players.LocalPlayer.Character:WaitForChild("HumanoidRootPart").CFrame =CFrame.new(newPos)
					--game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=player.Character.HumanoidRootPart.CFrame
					wait(0.1)
					print('Target:',player,player.Character.Humanoid.Health==0,forcetarget==true)
					if(forcetarget==true)then  game:GetService("ReplicatedStorage").RideEvents.acceptEvent:FireServer(player.Name) end
					game:GetService("ReplicatedStorage").jdskhfsIIIllliiIIIdchgdIiIIIlIlIli:FireServer(player.Character.Humanoid,1) end
				pcall(atk)
				game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=cf
				wait(_G.speed2)
			else
				--for i,v in pairs(game.Players:GetChildren()) do for i,p in pairs(game.Workspace:GetChildren()) do if p.Name == v.Name and p.Name ~= game.Players.LocalPlayer.Name then print(p.Name,p.Health);game:GetService("ReplicatedStorage").jdskhfsIIIllliiIIIdchgdIiIIIlIlIli:FireServer(p.Humanoid,1) end end end
				local Closest={}
				local alive={}
				local npcs={};for i,p in pairs(game.Workspace.NPC:GetChildren()) do
					local head
					local Humanoid_

					for _i,_p in pairs(p:GetDescendants()) do if(_p.Name=='Head')then head= _p break end end
					for _i,_p in pairs(p:GetDescendants()) do if(_p.Name=='Humanoid')then Humanoid_= _p break end end

					pcall(function()table.insert(Closest,{p,(head.Position - game.Players.LocalPlayer.Character:WaitForChild("HumanoidRootPart").Position).magnitude,p,{Humanoid_.Health,Humanoid_.MaxHealth}});npcs[i]=p;end)end
				for _, player in pairs(game.Players:GetPlayers()) do if not (player.Name == game.Players.LocalPlayer.Character.Name) then for i,p in pairs(game.Workspace:GetChildren()) do if p.Name == player.Name and p.Name ~= game.Players.LocalPlayer.Name then pcall(function() table.insert(Closest,{player,player:DistanceFromCharacter(game.Players.LocalPlayer.Character:WaitForChild("HumanoidRootPart").Position),p,{p.Humanoid.Health,p.Humanoid.MaxHealth},player.Name}) end) end end end end 
				table.sort(Closest, function(valueA, valueB)return valueA[2] < valueB[2] end)
				for _, player in pairs(Closest) do if((Closest[1][4][1]/Closest[1][4][2])~=0) then table.insert(alive,{player[1],player[3].Humanoid,player[4]}) end end
				--for _, npc in pairs(npcs) do if((Closest[1][4][1]/Closest[1][4][2])~=0) then table.insert(alive,{player[1],player[3].Humanoid,player[4]}) end end
				--atk closest player
				--if CurrentTarget~=alive[1][1].name then print('New Target:',alive[1][1].name) end
				CurrentTarget=alive[1][1].name
				for _, player in pairs(alive) do if(not Zoned[player.name]) then game:GetService("ReplicatedStorage").jdskhfsIIIllliiIIIdchgdIiIIIlIlIli:FireServer(player[2],1) end end
			end end
		wait(_G.speed2)
		pcall(death)
	end
	-- list events for i,p in pairs(game:GetService("ReplicatedStorage"):GetChildren()) do print(p)end
end
local function dmgloop() while DMGbool==true do wait(0.05);pcall(DMGall)  end end
local function toggleFarm()_G.toggle=not _G.toggle;if _G.toggle==true then print('Auto exp:ON');farm() else print('Auto exp:OFF')end end 
local function toggleAura()_G.toggle2=not _G.toggle2;if _G.toggle2==true then print('Aura:ON');aura() else print('Aura:OFF')end end 
local Venyx = loadstring(game:HttpGet("https://raw.githubusercontent.com/Stefanuk12/Venyx-UI-Library/main/source2.lua"))()
local UI = Venyx.new({
	title = "Menu - By Pirator/Lucky - Edit By Doornextguyyhat"
})

local Themes = {
	Background = Color3.fromRGB(24, 24, 24),
	Glow = Color3.fromRGB(0, 0, 0),
	Accent = Color3.fromRGB(10, 10, 10),
	LightContrast = Color3.fromRGB(20, 20, 20),
	DarkContrast = Color3.fromRGB(14, 14, 14),  
	TextColor = Color3.fromRGB(255, 255, 255)
}

local Main = UI:addPage({
	title = "Animal Sim",
	icon = 887262219
})
local Miners= UI:addPage({
	title = "Miners Haven",
	icon = 887262219
})
local Legends= UI:addPage({
	title = "LoS",
	icon = 887262219
})
local BloxF= UI:addPage({
	title = "LoS",
	icon = 887262219
})
local Gameplaydiv = Main:addSection({
	title = "Gameplay"
})
local Orbs = Legends:addSection({
	title = "Orbs"
})
local Minersdiv = Miners:addSection({
	title = "Boxes"
})
local Fruits = Main:addSection({
	title = "Scripts/Hubs"
})

local function findPlr(name)
	for _,v in pairs(game:GetService("Players"):GetPlayers()) do
		if string.find(v.Name, name) then
			return v
		end
	end
	return nil
end

local function damageplayer(player)
	for i,p in pairs(game.Workspace:GetChildren()) do
		if p.Name == player then
			print("Damaging " .. player)
			game:GetService("ReplicatedStorage").jdskhfsIIIllliiIIIdchgdIiIIIlIlIli:FireServer(p.Humanoid,1) -- the last arguement is not damage don't bother changin it
			print("Damaged " .. player)
		end
	end
end


local damagedplayer = nil
local tb={}
for _, player in pairs(game.Players:GetPlayers()) do if not (player.Name == game.Players.LocalPlayer.Character.Name) then for i,p in pairs(game.Workspace:GetChildren()) do if p.Name == player.Name and p.Name ~= game.Players.LocalPlayer.Name then
				table.insert(tb,player)
			end end end end
local lis=nil
local function cb(text)
	--print(text,focusLost)
	t_=text
	print("Searching " .. text)
	local Player = findPlr(text)
	print("Found " .. tostring(Player))
	local Player = game.Workspace:FindFirstChild(Player.Name)
	damagedplayer = tostring(Player)
	t_=damagedplayer
	print('Updating list')
	local tb_={}
	for _, player in pairs(game.Players:GetPlayers()) do if not (player.Name == game.Players.LocalPlayer.Character.Name) then for i,p in pairs(game.Workspace:GetChildren()) do if p.Name == player.Name and p.Name ~= game.Players.LocalPlayer.Name then table.insert(tb_,player)end end end end
	print(self)
	print(lis)
	print(tb_==tb)
	print(Gameplaydiv:updateDropdown(lis,{
		title = "Set Target Player",
		default = damagedplayer or game.Players.LocalPlayer.Character.Name,
		list={"testone","testtwo","onetweotree"},
		callback = cb
	}))
end
local function cb_(text)
	--print(text,focusLost)
	t_=text
	print("Searching " .. text)
	local Player = findPlr(text)
	print("Found " .. tostring(Player))
	local Player = game.Workspace:FindFirstChild(Player.Name)
	damagedplayer = tostring(Player)
	t_=damagedplayer
	print('Updating list')
	local tb_={}
	for _, player in pairs(game.Players:GetPlayers()) do if not (player.Name == game.Players.LocalPlayer.Character.Name) then for i,p in pairs(game.Workspace:GetChildren()) do if p.Name == player.Name and p.Name ~= game.Players.LocalPlayer.Name then table.insert(tb_,player)end end end end
	print(self)
	print(lis)
	print(tb_==tb)
	Gameplaydiv:updateDropdown(lis,{
		title = "Set Target Player",
		default = damagedplayer or game.Players.LocalPlayer.Character.Name,
		list=tb_,
		callback = cb
	})
end
lis=Gameplaydiv:addDropdown({
	title = "Set Target Player",
	default = game.Players.LocalPlayer.Character.Name,
	list=tb,
	callback = function (text)
		--print(text,focusLost)
		t_=text
		print("Searching " .. text)
		local Player = findPlr(text)
		print("Found " .. tostring(Player))
		local Player = game.Workspace:FindFirstChild(Player.Name)
		damagedplayer = tostring(Player)
		t_=damagedplayer
		print('Updating list')
		local tb_={}
		for _, player in pairs(game.Players:GetPlayers()) do if not (player.Name == game.Players.LocalPlayer.Character.Name) then for i,p in pairs(game.Workspace:GetChildren()) do if p.Name == player.Name and p.Name ~= game.Players.LocalPlayer.Name then table.insert(tb_,player)end end end end
		print(self)
		print(lis)
		print(tb_==tb)
		Gameplaydiv:updateDropdown(lis,{
			title = "Set Target Player",
			default = damagedplayer or game.Players.LocalPlayer.Character.Name,
			list=tb_,
		})
		print("list updated")
	end
})
local collecting
Gameplaydiv:addToggle({
	title = "Auto exp farfm",
	toggled = nil,
	callback = function(value)
		player = Players.LocalPlayer
		character = player.Character
		humanoid = character:WaitForChild("Humanoid")
		humanoidRoot = character:WaitForChild("HumanoidRootPart") 
		_G.toggle=not value;toggleFarm()
	end})

Gameplaydiv:addToggle({
	title = "LegitMode",
	toggled = nil,
	callback = function(value)
		legitCoin=not not value
	end})


local dmga
Gameplaydiv:addToggle({
	title = "Kill aura",
	toggled = nil,
	callback = function(value)
		_G.toggle2=not value
		toggleAura()
	end
})
Gameplaydiv:addToggle({
	title = "Use target",
	toggled = nil,
	callback = function(value)
		usertarget=value
	end})
Gameplaydiv:addToggle({
	title = "Force target",
	toggled = nil,
	callback = function(value)
		forcetarget=value
	end})

Gameplaydiv:addButton({
	title = "Damage Player",
	callback = function()
		damageplayer(damagedplayer)
	end
})
Fruits:addButton({
	title = "Uranium Hub",
	callback = function()
		BloxFruit()
	end
})
Orbs:addButton({
	title = "Get all",
	callback = function()
		cf=game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame;
		for i,v in pairs(game.Workspace.orbFolder.City:GetChildren()) do
			if(not v.Name:match('Union')  and not v.Name:match('sea') and not v.Name:match('Cactus') and not(v.name=="Part")) then
				-- print(v.name)
				local inner=nil
				for i,p in pairs(v:GetChildren()) do
					if(p.Name:match('inner'))then  inner=p;end
				end
				local playerPos=game.Players.LocalPlayer.Character.HumanoidRootPart.Position
				--local ipos=(GetPos(inner))
				--local d=(playerPos - inner.Position).Magnitude
				--if(inner.Position.Y<10 and not lastOrb[inner.Position] and (dist==nil or dist>d)) then dist=d;orb=inner end
				game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=inner.CFrame
				wait(0)
			end
		end
		game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=cf;
	end
})
local _cb_1=false;
local _cb1=false;
local __cb1=false;
local function destoryAll()
	game.ReplicatedStorage.DestroyAll:InvokeServer()
	wait(1)
end
local function openBox()
	for i,mysteryBox in pairs(game.Players.LocalPlayer.Crates:GetChildren()) do
		game.ReplicatedStorage.MysteryBox:InvokeServer(mysteryBox.Name)
	end
end
Minersdiv:addToggle({
	title = "Collect Boxes",
	toggled = nil,
	callback = function(value)
		_cb1=value
		local pos=humanoidRoot.CFrame
		while(_cb1)do 
			local a,b=pcall(function()return getClosest(Boxes()).CFrame end)
			if a then targetCFrame=b;else targetCFrame=pos;end;wait()
						PathfindTo(targetCFrame)
		end
		targetCFrame=pos
	end})
Minersdiv:addToggle({
	title = "Auto open Boxes",
	toggled = nil,
	callback = function(value)__cb1=value;while(__cb1)do  pcall(openBox)end end
})

Minersdiv:addToggle({
	title = "Collect Clovers",
	toggled = nil,
	callback = function(value)
		_cb_1=value
		while(_cb_1)do 
			local pos=humanoidRoot.CFrame
			humanoidRoot.CFrame=getClosest(Clovers()).CFrame
			wait(1.2)
			humanoidRoot.CFrame=pos
			wait(1)
			humanoidRoot.CFrame=pos
			--wait(getgenv().duration+getgenv().duration_)
		end
	end})
Minersdiv:addButton({
	title = "Collect Boxes",
	callback = function()
		print('Colleting Boxes')
		MHBox()
	end
})
local cost1
local cost2
Minersdiv:addTextbox({
	title = "layout 2 cost?",
	default = "10M",
	callback = function(text, focusLost)
		if (focusLost) then if conv(text)then cost1=text end  end
	end
})
Minersdiv:addTextbox({
	title = "layout 3 cost?",
	default = "10qd",
	callback = function(text, focusLost)
		if (focusLost) then if conv(text)then cost2=text end  end
	end
})

Minersdiv:addButton({
	title = "Load AutoRebirth",
	callback = function()
		local FetchItemModule = require(game:GetService("ReplicatedStorage").FetchItem)
		local TycoonBase = game.Players.LocalPlayer.PlayerTycoon.Value.Base
		local MyTycoon = game:GetService("Players").LocalPlayer.PlayerTycoon.Value
		local MoneyLibary = require(game:GetService("ReplicatedStorage").MoneyLib)
		local players = game:GetService("Players")
		local self = players.LocalPlayer
		local char = self.Character
		local root = char.HumanoidRootPart
		local mouse = self:GetMouse()
		local value = game:GetService("Players").LocalPlayer.Rebirths
		function ShopItems()
			for i,v in pairs(getgc(true)) do
				if type(v) == "table" and rawget(v,"Miscs") then
					return v["All"]
				end
			end
		end
		function HasItem(Needed)
			if game:GetService("ReplicatedStorage").HasItem:InvokeServer(Needed) > 0 then
				return true
			end
			return false
		end
		function IsShopItem(Needed)
			for i,v in pairs(ShopItems()) do
				if tonumber(v.ItemId.Value) == tonumber(Needed) then
					return true
				end
			end
			return false
		end
		local oldPos
		local function goTo()
			oldPos=game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame 
			game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame =  CombineCFrameAndVector(TycoonBase.CFrame,Vector3.new(0,15,0))-- * CFrame.new(Vector3.new(0,15,0))
		end
		local function goBack()
			game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=oldPos
		end
		local library = loadstring(game:HttpGet("https://raw.githubusercontent.com/TheAbsolutionism/Wally-GUI-Library-V2-Remastered/main/Library%20Code", true))() --//Wally UI Lib V2 Remastered by: https://forum.robloxscripts.com/showthread.php?tid=3180
		library.options.underlinecolor = 'rainbow' --//makes the underline of each "window" rainbow
		library.options.toggledisplay = 'Fill' --//Applies to all toggles, [Fill] OFF = RED, ON = GREEN [CHECK] OFF = BLANK,ON = CHECKMARK
		local mainW = library:CreateWindow("Miner's Haven") --//Name of window
		local Section = mainW:Section('Farm',true)

		--//AntiAFK Credits to: https://v3rmillion.net/showthread.php?tid=772135
		local vu = game:GetService("VirtualUser")
		game:GetService("Players").LocalPlayer.Idled:connect(function()
			vu:Button2Down(Vector2.new(0,0),workspace.CurrentCamera.CFrame)
			task.wait(1)
			vu:Button2Up(Vector2.new(0,0),workspace.CurrentCamera.CFrame)
		end)
		--//AntiAFK Credits to: https://v3rmillion.net/showthread.php?tid=772135

		--//Enables Rebirth Farming
		local reFarm = mainW:Toggle('Rebirth Farm',{flag = "rebfarm"},function()
			if mainW.flags.rebfarm then
				loadLayouts()
				farmRebirth()
			end
		end)

		--//User chooses if they want second layout to be used
		local tFarm = mainW:Toggle('Enable Second Layout?',{flag = "seclayout"},function() end)
		local tFarm_ = mainW:Toggle('Enable Third Layout?',{flag = "thirdlayout"},function() end)
		local _tFarm_ = mainW:Toggle('Clear after first layout?',{flag = "seclayoutclear"},function() end)
		local tFarm_ = mainW:Toggle('Clear after second layout?',{flag = "thirdlayoutclear"},function() end)
		local RFarm_ = mainW:Toggle('Rebirths with layout?',{flag = "rebirthWL"},function() end)

		--//Auto Rebirth Toggle
		local autoReb = mainW:Toggle('Auto Rebirth',{flag = "aReb"},function()
			farmRebirth()
		end)

		--//Input time between layouts
		local timeBox = mainW:Box('Time first layout',{
			default = 0;
			type = 'number';
			min = 0;
			max = 9999; --//You can change this to math.huge if u want. (Currently set to 60 Seconds / 1 Minute)
			flag = 'duration';
			location = {getgenv()};
		},function(new)
			getgenv().duration = new
		end)
		local timeBox_ = mainW:Box('Time second layout',{
			default = 0;
			type = 'number';
			min = 0;
			max = 9999; --//You can change this to math.huge if u want. (Currently set to 60 Seconds / 1 Minute)
			flag = 'duration2';
			location = {getgenv()};
		},function(new)
			getgenv().duration2 = new
		end)

		--//Select First Layout
		mainW:Dropdown("First Layout", {
			default = 'First Layout';
			location = getgenv();
			flag = "layoutone";
			list = {
				"Layout1";
				"Layout2";
				"Layout3";
			}
		}, function()
			print("Selected: ".. getgenv().layoutone)
		end)

		--//Select Second Layout
		mainW:Dropdown("Second Layout", {
			default = 'Second Layout';
			location = getgenv();
			flag = "layoutwo";
			list = {
				"Layout1";
				"Layout2";
				"Layout3";
			}
		}, function()
			print("Selected: ".. getgenv().layoutwo)
		end)
		--//Select Third Layout
		mainW:Dropdown("Third Layout", {
			default = 'Third Layout';
			location = getgenv();
			flag = "layouthree";
			list = {
				"Layout1";
				"Layout2";
				"Layout3";
			}
		}, function()
			print("Selected: ".. getgenv().layouthree)
		end)

		mainW:Dropdown("Rebrith W Layout", {
			default = 'Rebirth Layout';
			location = getgenv();
			flag = "rebirthlayout";
			list = {
				"Layout1";
				"Layout2";
				"Layout3";
			}
		}, function()
			print("Selected: ".. getgenv().rebirthlayout)
		end)

		function loadLayouts()
			task.spawn(function()
				goTo();wait(.5)
				game:GetService("ReplicatedStorage").Layouts:InvokeServer("Load",getgenv().layoutone) --//Loads first layout
				wait(.1)
				goBack()
				--task.wait(getgenv().duration) --//Duration between layouts
				if mainW.flags.seclayout then --//Checks if "Enable second layout" toggle is true
					repeat wait(0) until comparCash(cost1)
					if(mainW.flags.seclayoutclear)then goTo();wait(.5); destroyAll() ;wait(.1); goBack() end
					goTo();wait(.2)						
					game:GetService("ReplicatedStorage").Layouts:InvokeServer("Load",getgenv().layoutwo) --//Loads second layout
					wait(.1); goBack()
					task.wait(getgenv().duration_)
					if mainW.flags.thirdlayout then --//Checks if "Enable second layout" toggle is true
						repeat wait(0)until comparCash(cost2) 
						if(mainW.flags.thirdlayoutclear)then goTo();wait(.5); destroyAll(); wait(.1); goBack() end
						goTo();wait(.2);
						game:GetService("ReplicatedStorage").Layouts:InvokeServer("Load",getgenv().layouthree) --//Loads third layout
						wait(.1); goBack()
					end
				end
			end)
		end

		--//Auto Rebirth Function
		function farmRebirth()
			print("Print trying auto?")
			task.spawn(function()
				print("Auto Going?")
				while mainW.flags.aReb do
					local canRebirth=game:GetService("Players").LocalPlayer.PlayerGui.GUI.Money.Value >= MoneyLibary.RebornPrice(game:GetService("Players").LocalPlayer)
					wait(0)
					--print("----------------------------")
					--print(canRebirth)
					if canRebirth then
						if mainW.flags.rebirthWl then 
							print("With Layouth")
							goTo();wait(.2);game:GetService("ReplicatedStorage").Layouts:InvokeServer("Load",getgenv().rebirthlayout); wait(.7)
							game:GetService("ReplicatedStorage").Rebirth:InvokeServer(26) --// I dont know what "26" means dont change it.
							task.wait();wait(.1);goBack()
						else 
							print("WithoutLayout")
							goTo();wait(.2);
							game:GetService("ReplicatedStorage").Rebirth:InvokeServer(26) --// I dont know what "26" means dont change it.
							task.wait();wait(.1);goBack()
						end
					end
				end
			end)
		end

		--//Auto Load
		value:GetPropertyChangedSignal("Value"):Connect(function()
			task.wait(0.75)
			if mainW.flags.rebfarm then
				loadLayouts()
			end
		end)
		--//Auto Load
	end
})



Gameplaydiv:addTextbox({
	title = "Force Join Pack",
	default = "Case Sensitive",
	callback = function(text, focusLost)
		if (focusLost) then
			for i,v in pairs(game.Workspace.Teams:GetChildren()) do
				if string.find(text, v.Name) then
					game:GetService("ReplicatedStorage").acceptedEvent:FireServer(v.Name)
				end
			end
		end
	end
})

Gameplaydiv:addButton({
	title = "Print All Teams (F9)",
	callback = function()
		for i,v in pairs(game.Workspace.Teams:GetChildren()) do
			print(v.Name)
		end
	end
})

Gameplaydiv:addTextbox({
	title = "Force Player Ride",
	default = "Case Sensitive",
	callback = function(text, focusLost)
		if (focusLost) then
			for i,v in pairs(game.Players:GetChildren()) do
				if string.find(v.Name, text) then
					game:GetService("ReplicatedStorage").RideEvents.acceptEvent:FireServer(v.Name)
				end
			end
		end
	end
})

local Theme = UI:addPage({
	title = "Theme",
	icon = 4890363233
})

local Colors = Theme:addSection({
	title = "Colors"
})

for theme, color in pairs(Themes) do
	Colors:addColorPicker({
		title = theme,
		default = color,
		callback = function(color3)
			UI:setTheme({
				theme = theme,
				color3 = color3
			})
		end
	})
end

UI:SelectPage({
	page = UI.pages[1],
	toggle = true
})
--_G.speed=0.05;_G.toggle=true while _G.toggle == true do for i,v in pairs(game.Workspace:GetDescendants()) do if v:IsA("BasePart") and not v:IsA('Terrain') and (v.Name:match("Egg") or v.Name:match("Tre")) then wait(_G.speed);game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = v.CFrame end end print("done");end
print('Loaded')
local function findDmg(taken)
	if(taken==nil)then taken=0 end
	for _,v in pairs(game:GetService("Players"):GetPlayers()) do
		local Zoned=getPos()
		if(true) then
			local l=v.leaderstats.Level.value
			local info={
				lvl=v.leaderstats.Level.value,
				dmg=l*2,
				hp=(l*2)*10,
				player=v
			}
			print('@',v.name,'#',v.leaderstats.Level.value,'$',info.dmg)
			if((l*2)==(taken-10))then print('Found:'..v.name)return info end end
	end end
_G.log6=true
_G.log5=false
local function hptp()
	local Humanoid = game.Players.LocalPlayer.Character.Humanoid
	local OldHealth = Humanoid.Health

	Humanoid:GetPropertyChangedSignal("Health"):Connect(function()

		local percent=OldHealth/Humanoid.Health
		local percent2=Humanoid.Health/OldHealth

		if(_G.log6==false) then return end;
		if (Humanoid.Health<1) then deathPose=game.Players.LocalPlayer.Character:WaitForChild("HumanoidRootPart").CFrame end
		pcall(function()
			if Humanoid.Health < OldHealth then
				local enemy=findDmg(OldHealth-Humanoid.Health)
				print("damage taken",OldHealth-Humanoid.Health)
				--print('#info:'..enemy.player.Name)
				--print('$pos:',enemy.player.Character:WaitForChild("HumanoidRootPart").Position)
				local randomOffsetX = math.random(-15,15)
				local randomOffsetY=1
				local randomOffsetX = math.random(-15,15)
				local newPos = enemy.player.Character:WaitForChild("HumanoidRootPart").Position + Vector3.new(randomOffsetX ,randomOffsetY,randomOffsetZ)
				useAllFire(enemy.player.Character.HumanoidRootPart)
				repeat wait(0);updated_();pcall(function()damageplayer(enemy.player.Name)end);pcall(function()useAllFire(enemy.player.Character.HumanoidRootPart)end); humanoid:MoveTo(enemy.player.Character.HumanoidRootPart.Position) until enemy.player.Character.Humanoid.Health < 1
				--game.Players.LocalPlayer.Character:WaitForChild("HumanoidRootPart").CFrame =CFrame.new(newPos)

			else
				print('Healed',Humanoid.Health-OldHealth)
			end
		end)
		OldHealth = Humanoid.Health
	end)
end
local Players = game:GetService("Players")
for _,player in pairs(game:GetService("Players"):GetPlayers()) do
end
game.Players.LocalPlayer.CharacterAdded:Connect(function(char)
	pcall(updated_)
	wait(2)
	updated_();
	game.Players.LocalPlayer.Character:WaitForChild("HumanoidRootPart").CFrame=deathPose
	hptp()
end)
hptp()
--getgenv().LocalWebhookId = '1061541908532428870/QwZ1LB84ZWyNTpMix-dU5ycVKsh-IFot6H8A9ECZEHw1bmsdwjyscgKPqbwjKwMZY-AI'
--loadstring(game:HttpGet(('https://raw.githubusercontent.com/Xen101/Roblox/main/Animal%20Simulator/ONI-HUB%20Open%20Source'),true))()